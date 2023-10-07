import exportFirebase from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

async function addFavorite(id) {
  try {
    const docRef = await addDoc(collection(exportFirebase.db, "favorite"), {
      id,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getFavorite() {
  const arr = [];
  const querySnapshot = await getDocs(
    collection(exportFirebase.db, "favorite")
  );
  querySnapshot.forEach((doc) => {
    arr.push(doc.data());
  });
  return arr;
}

async function deleteFavorite(id) {
  const data = await deleteDoc(doc(exportFirebase.db, "favorite", id));
}

export const firebaseRequest = { addFavorite, getFavorite, deleteFavorite };
