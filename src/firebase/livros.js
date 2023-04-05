import {
    addDoc,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    updateDoc
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { livrosCollection } from "./collections";
import { storage } from "./config"

export async function addLivro(data) {
    await addDoc(livrosCollection, data);
}

export async function getLivros() {
    const snapshot = await getDocs(livrosCollection);
    let livros = [];
    snapshot.forEach(doc => {
        livros.push({...doc.data(), id: doc.id});
    })
    return livros;
}

export async function getLivro(id) {
    const document = await getDoc(doc(livrosCollection, id));
    return {...document.data(), id: document.id};
}

export async function updateLivro(id, data) {
    await updateDoc(doc(livrosCollection, id), data);
}

export async function deleteLivro(id) {
    await deleteDoc(doc(livrosCollection, id));
}

export async function uploadCapaLivro(imagem) {
    const filename = imagem.name;
    const imageRef = ref(storage, `livros/${filename}`);
    const result = await uploadBytes(imageRef, imagem);
    return await getDownloadURL(result.ref);
}

export async function reorganizaArray (array) {
    let livros = await array;
    let livroReorder = [];
    let total = 1;
    for (let i = 0; i < livros.length; i++) {
        if (i < livros.length - 1 && livros[i].titulo == livros[i + 1].titulo) {
            total++;
        } else {
            livroReorder.push({ titulo: livros[i].titulo, urlCapa: livros[i].urlCapa, categoria: livros[i].categoria,  total: total });
            total = 1;
        }
    }
    livroReorder = livroReorder.sort( (x, y) => {
        return x.total - y.total
    } )
    console.log(livroReorder);
    return livroReorder
}




