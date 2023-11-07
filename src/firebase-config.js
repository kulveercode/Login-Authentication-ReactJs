import { getAuth} from "firebase/auth";
import { initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCfx_pgU8RWZGLNJFGO1cz-wl0sbIa2_TI",
    authDomain: "react-login-email.firebaseapp.com",
    projectId: "react-login-email",
    storageBucket: "react-login-email.appspot.com",
    messagingSenderId: "152908873906",
    appId: "1:152908873906:web:be9830e5905aab38f249ab",
    measurementId: "G-MJ6E19SLWB"
  };

  const app = initializeApp(firebaseConfig);

  export const firebaseAuth = getAuth(app);
  