import FirebaseConfig from "./Firebase.config";
import { initializeApp } from "firebase/app";

const firebaseAuth = () => {
  initializeApp(FirebaseConfig);
};
export default firebaseAuth;
