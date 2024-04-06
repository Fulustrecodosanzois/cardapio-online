import { initializeApp } from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAZSYz9uoXPd7kbx_ucvI6FBxlg7gzsRaM",
  authDomain: "cardapio-5c1c7.firebaseapp.com",
  databaseURL: "https://cardapio-5c1c7-default-rtdb.firebaseio.com",
  projectId: "cardapio-5c1c7",
  storageBucket: "cardapio-5c1c7.appspot.com",
  messagingSenderId: "103941747572",
  appId: "1:103941747572:web:8da53e446f60e764fc7221"
};

console.log("Deu certo PORRA!")

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
































// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDbGxscnFjp44TFFEmmXBTkcwt5laM3Ir4",
//   authDomain: "cardapio-online-4c9f0.firebaseapp.com",
//   databaseURL: "https://cardapio-online-4c9f0-default-rtdb.firebaseio.com",
//   projectId: "cardapio-online-4c9f0",
//   storageBucket: "cardapio-online-4c9f0.appspot.com",
//   messagingSenderId: "320013215981",
//   appId: "1:320013215981:web:bd718283259da31de844e4"
// };

// console.log("alves ta na area!!!")

// const firebaseApp = initializeApp(firebaseConfig);
// export default firebaseApp;