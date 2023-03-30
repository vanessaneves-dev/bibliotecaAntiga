import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Chaves de acesso ao firebase
const firebaseConfig = {
  apiKey: "AIzaSyA4WL835F_ZvWgXoEM8TB874_I2rbWyfU0",
  authDomain: "bibliotech-aulas.firebaseapp.com",
  projectId: "bibliotech-aulas",
  storageBucket: "bibliotech-aulas.appspot.com",
  messagingSenderId: "864881618703",
  appId: "1:864881618703:web:570a29bf4288003c31187a"
};

// Inicializa o app com base nas configurações acima
export const app = initializeApp(firebaseConfig);
// Configurando o Authentication e seus recursos login/cadastro
export const auth = getAuth(app);
// Configura o Firestore e seus recursos de banco de dados
export const db = getFirestore(app);
// Configura o Storage e seus recursos de Upload
export const storage = getStorage(app);
