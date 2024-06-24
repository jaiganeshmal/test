import { initializeApp } from "firebase/app";
import { collection, getFirestore , addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKgzZpuUAOIoqQypUwzhx5ed6SEAjp8Tw",
  authDomain: "testing-7fac5.firebaseapp.com",
  projectId: "testing-7fac5",
  storageBucket: "testing-7fac5.appspot.com",
  messagingSenderId: "213490648571",
  appId: "1:213490648571:web:05631bd3903f9951eaf75e"
};

const app = initializeApp(firebaseConfig);
let db = getFirestore(app)
let collections = collection(db,"commerce")

export{
  collections,addDoc
}