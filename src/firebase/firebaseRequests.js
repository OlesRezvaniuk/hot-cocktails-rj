import exportFirebase from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

async function addFavorite({ itemId, userId }) {
  try {
    const docRef = await addDoc(
      collection(exportFirebase.db, `favorite-${userId}`),
      {
        itemId,
      }
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

async function getFavorite(id) {
  let arr = [];
  const querySnapshot = await getDocs(
    collection(exportFirebase.db, `favorite-${id}`)
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
