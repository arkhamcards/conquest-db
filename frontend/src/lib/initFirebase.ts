
import { FirebaseOptions, initializeApp, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyC0LJSi5gwY2yfWxUkcS_cL6lodd2ss2Ec",
  authDomain: "conquest-db.firebaseapp.com",
  projectId: "conquest-db",
  storageBucket: "conquest-db.appspot.com",
  messagingSenderId: "760600472805",
  appId: "1:760600472805:web:0d1133e4c759d62ee3780c"
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}
const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseFunctions = getFunctions(firebaseApp);

