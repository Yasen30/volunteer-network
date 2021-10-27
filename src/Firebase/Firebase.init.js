import FirebaseConfig from "./Firebase.config";

const firebaseAuth = () => {
  initializeApp(FirebaseConfig);
};
export default firebaseAuth;
