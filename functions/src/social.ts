import * as admin from 'firebase-admin';
import { forEach, map, trim } from 'lodash';
import { t } from 'ttag';

import { onCallAuth, RequestData } from './core';
import client from './graphql/client';

function normalizeHandle(handle: string) {
  return trim(handle.replace(/[.$[\]#\/]/g, '_').toLowerCase());
}


interface UpdateHandleData extends RequestData {
  userId?: string;
  handle?: string;
}

export const updateHandle = onCallAuth(async (data: UpdateHandleData, context) => {
  const userId = data.userId || context.auth.uid;
  if (userId !== context.auth.uid) {
    return {
      error: 'Request not authorized. You can only edit your own profile.',
    };
  }
  if (!data.handle || data.handle.length < 3 || data.handle.length > 22) {
    return {
      error: 'Handle must consist of only letters and numbers, and be between 2 and 22 characters long.',
    };
  }
  const normalizedHandle = normalizeHandle(data.handle);
  const currentHandle = await client.getUserByNormalizedHandle({ normalizedHandle });
  if (currentHandle.conquest_users.length && currentHandle.conquest_users[0].id !== userId) {
    return {
      error: t`Sorry, this handle has already been taken.`,
    };
  }

  await client.updateHandle({ userId, handle: trim(data.handle), normalizedHandle });
  return {
    success: true,
  };
});

export const deleteAccount = onCallAuth(async (data: {}, context) => {
  await admin.auth().deleteUser(context.auth.uid);
  return {
    success: true,
  };
});

interface SearchUsersData extends RequestData {
  search: string;
  offset?: number;
}
export const searchUsers = onCallAuth(async (data: SearchUsersData, context) => {
  if (data.search.length < 2) {
    return {
      error: t`Minimum search size is 2 characters.`,
    };
  }
  const normalizedSearch = normalizeHandle(data.search);
  try {
    const results = await client.searchHandles({
      normalizedHandle: `%${normalizedSearch}%`,
      normalizedHandleStart: `${normalizedSearch}%`,
      offset: data.offset
    });
    const users: { id: string; handle: string | undefined }[] = [];
    forEach(results.startMatch, (user) => {
      users.push({
        id: user.id,
        handle: user.handle || undefined,
      });
    });
    const alreadyFound = new Set(map(users, u => u.id));
    const fuzzyUsers: { id: string; handle: string | undefined }[] = [];
    forEach(results.looseMatch, (user) => {
      if (!alreadyFound.has(user.id)) {
        fuzzyUsers.push({
          id: user.id,
          handle: user.handle || undefined,
        });
      }
    });

    return {
      success: true,
      data: {
        users,
        fuzzyUsers,
        hasMore: users.length === 20,
      },
    };
  } catch (e) {
    if (e instanceof Error) {
      return {
        error: e.message,
      };
    }
    return {
      error: 'Unknown error',
    };
  }
});
