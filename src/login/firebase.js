import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth"

import {
    getFirestore,
    query,
    getDocs, 
    collection,
    where,
    addDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfbQsdTQc2Y6bzRJM0AusHVjEIOcUqYOk",
  authDomain: "virtual-mall-e8f49.firebaseapp.com",
  projectId: "virtual-mall-e8f49",
  storageBucket: "virtual-mall-e8f49.appspot.com",
  messagingSenderId: "164131274955",
  appId: "1:164131274955:web:d9e709b59772bb4dbd5b4e",
  measurementId: "G-RWTJD5BXQ7"
};

const app = initializeApp(firebaseConfig)
const auth =getAuth(app)
const db = getFirestore(app)

const googleProvider = new GoogleAuthProvider()
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider)
        const user = res.user
        const q = query(collection(db, "users"), where("uid", "==", user.uid))
        const docs = await getDocs(q)
        if (docs.docs.length === 0){
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            })
        }
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name, 
            authProvider: "local",
            email,
        })
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email)
        alert("Reset link sent to email.")
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const logout = () => {
    signOut(auth)
}

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
}