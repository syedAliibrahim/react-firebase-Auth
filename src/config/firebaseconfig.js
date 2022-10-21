// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2VbtK_B5B-hpKB-vz-XLW-tRxDPWk6hU",
  authDomain: "react-log-63da2.firebaseapp.com",
  projectId: "react-log-63da2",
  storageBucket: "react-log-63da2.appspot.com",
  messagingSenderId: "17598258350",
  appId: "1:17598258350:web:f82bc1de84e10d61b3e13f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;
