import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: (process.env.REACT_APP_firebase_ApiKey),
    authDomain: (process.env.REACT_APP_firebase_AuthDomain),
    projectId: "movie-app-296f4",
    storageBucket: "movie-app-296f4.appspot.com",
    messagingSenderId: "812465631806",
    appId: "1:812465631806:web:fcb5a72d12adb1f147976f",
    measurementId: "G-XN2X81ECPD"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)