import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject } from '@apollo/client/core';
import { LocalStorageWrapper, CachePersistor } from 'apollo3-cache-persist';
import { AuthUser } from '../lib/useFirebaseAuth';
import { setContext } from '@apollo/client/link/context';

const isServer = typeof window === "undefined";

let ANON_CLIENT: ApolloClient<NormalizedCacheObject> | null = null;
let ANON_PURGE: () => Promise<void> = async() => {};
export async function initAnonClient(forceNew?: boolean): Promise<[ApolloClient<NormalizedCacheObject>, () => Promise<void>]> {
  if (!ANON_CLIENT || forceNew) {
    const cache = new InMemoryCache();
    if (!isServer) {
      let newPersistor = new CachePersistor({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
        debug: true,
        trigger: 'background',
      });
      await newPersistor.restore();
      ANON_PURGE = () => newPersistor.purge();
    }
    ANON_CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: 'https://gapi.rangersdb.com/v1/graphql',
      cache,
    });
  }
  return [ANON_CLIENT, ANON_PURGE];
}

export async function initAuthClient(user: AuthUser): Promise<[CachePersistor<NormalizedCacheObject>, ApolloClient<NormalizedCacheObject>]> {
  const cache = new InMemoryCache();

  const authLink = setContext(async(req, { headers }) => {
    const hasuraToken = await user.user.getIdToken();
    if (hasuraToken) {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${hasuraToken}`,
        },
      };
    }
    console.error('No hasura token when making request');
    return { headers };
  });
  const httpsLink = authLink.concat(new HttpLink({
    uri: `https://gapi.rangersdb.com/v1/graphql`,
  }));

  let newPersistor = new CachePersistor({
    cache,
    storage: new LocalStorageWrapper(window.localStorage),
    debug: true,
    trigger: 'background',
  });
  await newPersistor.restore();
  const client = new ApolloClient({
    link: httpsLink,
    cache,
  });
  return [newPersistor, client];
}
