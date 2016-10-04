import * as firebase from 'firebase';
import env from '../environment';

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_DATABASE_URL,
  storageBucket: env.FIREBASE_STORAGE_BUCKET
};

export default firebase.initializeApp(firebaseConfig);
