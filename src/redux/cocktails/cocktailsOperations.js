import { createAsyncThunk } from "@reduxjs/toolkit";
import exportFirebase from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  deleteField,
  updateDoc,
} from "firebase/firestore";

// export async function addFavorite({ itemId, userId }) {
//   try {
//     const docRef = doc(exportFirebase.db, `favorites`, userId);
//     const docSnap = await getDoc(docRef);
//     if (docSnap.data() === undefined) {
//       await setDoc(doc(exportFirebase.db, `favorites`, userId), {
//         [itemId]: itemId,
//       });
//       console.log(docSnap.data());
//     } else {
//       await setDoc(doc(exportFirebase.db, `favorites`, userId), {
//         ...docSnap.data(),
//         [itemId]: itemId,
//       });
//       console.log(docSnap.data());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

export const getFavoriteCocktails = createAsyncThunk(
  "favorite/get",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      const docRef = doc(exportFirebase.db, `favorites`, id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "favorite/add",
  async ({ data }, thunkAPI) => {
    const { itemId, userId } = data;
    try {
      const docRef = doc(exportFirebase.db, `favorites`, userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.data() === undefined) {
        await setDoc(doc(exportFirebase.db, `favorites`, userId), {
          [itemId]: itemId,
        });
      } else {
        await setDoc(doc(exportFirebase.db, `favorites`, userId), {
          ...docSnap.data(),
          [itemId]: itemId,
        });
      }
      return docSnap.data();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export async function deleteFavorite({ userId, itemId }) {
  const docRef = doc(exportFirebase.db, `favorites`, userId);
  try {
    await updateDoc(docRef, {
      [itemId]: deleteField(),
    });
    console.log(itemId);
  } catch (error) {
    console.log(error);
  }
}
