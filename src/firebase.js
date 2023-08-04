import { initializeApp } from "firebase/app"
import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword, 
    signOut 
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
 
export const app = initializeApp(
    {
        apiKey: "AIzaSyDGo1-rnRIQP90m5-I5miQalwukBoCtt2c",
        authDomain: "fake-twitter-947be.firebaseapp.com",
        projectId: "fake-twitter-947be",
        storageBucket: "fake-twitter-947be.appspot.com",
        messagingSenderId: "509033177321",
        appId: "1:509033177321:web:1205518237db3dbe9e1078"
    }
)

const auth = getAuth(app);
const firestore = getFirestore(app);

export { 
    auth, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    firestore 
};

