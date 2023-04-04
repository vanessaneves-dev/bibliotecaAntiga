import { addDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { emprestimosCollection } from "./collections";
import { query, orderBy, limit } from "firebase/firestore";

const name01= query(emprestimosCollection, orderBy("dataEmprestimo", "desc"), limit (5))
  export async function getEmprest(){
    const sp = await getDocs(name01);
      let emprest= [];
      sp.forEach(doc =>{
        emprest.push({...doc.data(), id: doc.id});
      });
      return emprest ;
   
  }

export async function adicionarEmprestimo(data) {
    await addDoc(emprestimosCollection, data);
}

export async function getEmprestimos() {
    const snapshot = await getDocs(emprestimosCollection);
    let emprestimos = [];
    snapshot.forEach(doc => {
        emprestimos.push({...doc.data(), id: doc.id});
    });
    return emprestimos;
}

export async function getEmprestimo(id) {
    const document = await getDoc(doc(emprestimosCollection, id));
    return {...document.data(), id: document.id};
}

export async function updateEmprestimo(id, data) {
    await updateDoc(doc(emprestimosCollection, id), data);
}

