import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvNv9P3NnVPizRvALT7bTOnqaW2ibR60I",
    authDomain: "project-2bd93.firebaseapp.com",
    projectId: "project-2bd93",
    storageBucket: "project-2bd93.appspot.com",
    messagingSenderId: "209207339680",
    appId: "1:209207339680:web:216758fbe6f9551da1b7c5"
};

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  app = getAuth();
}

const auth = getAuth(app);
const firestore = getFirestore(app);
export { auth, firestore };
