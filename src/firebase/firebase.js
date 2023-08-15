import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { 
    getAuth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth"


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
const storage = getStorage(app);

export { 
    auth, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    firestore,
    storage,
};

