
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApdmNtmim7gR5FH144hFS2wGpnotXDlcY",
    authDomain: "cycwayofficial.firebaseapp.com",
    databaseURL: "https://cycwayofficial-default-rtdb.firebaseio.com",
    projectId: "cycwayofficial",
    storageBucket: "cycwayofficial.appspot.com",
    messagingSenderId: "297553891707",
    appId: "1:297553891707:web:ca6ed62dc2d84cdbc86dde"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const db2 = getFirestore(app);
export {db,db2};
// export const db1 = getDatabase(app);
