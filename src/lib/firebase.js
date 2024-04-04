import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDbGxscnFjp44TFFEmmXBTkcwt5laM3Ir4",
  authDomain: "cardapio-online-4c9f0.firebaseapp.com",
  databaseURL: "https://cardapio-online-4c9f0-default-rtdb.firebaseio.com",
  projectId: "cardapio-online-4c9f0",
  storageBucket: "cardapio-online-4c9f0.appspot.com",
  messagingSenderId: "320013215981",
  appId: "1:320013215981:web:bd718283259da31de844e4"
};

console.log("alves ta na area!!!")

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;