import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDOS5GU9PTfYlQ0za57bHogv3YursUQ_Yk",
    authDomain: "linkedin-clone-bd062.firebaseapp.com",
    projectId: "linkedin-clone-bd062",
    storageBucket: "linkedin-clone-bd062.appspot.com",
    messagingSenderId: "117433887475",
    appId: "1:117433887475:web:55d5628a4dace7c812a586"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
