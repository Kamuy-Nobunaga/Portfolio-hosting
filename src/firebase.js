// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getFirestore, collection, onSnapshot, 
    addDoc, deleteDoc, doc, getDocs
} from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB3QphiVBsn4avkGEvBkgbPrgPNcjg5Hc",
  authDomain: "portfolio-bf0d2.firebaseapp.com",
  projectId: "portfolio-bf0d2",
  storageBucket: "portfolio-bf0d2.appspot.com",
  messagingSenderId: "874198523776",
  appId: "1:874198523776:web:38c231858baf6bd0556b65"
};

// Initialise Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const colRef = collection(db, 'projects')

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let projects = []
        snapshot.docs.forEach((doc) => {
            projects.push({ ...doc.data(), id: doc.id })
        })
        console.log(projects);
    })
    .catch(err => {
        console.log(err.message);
    })