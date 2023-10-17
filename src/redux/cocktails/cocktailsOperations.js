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

async function favoriteRequest(userId) {
  try {
    const docRef = collection(exportFirebase.db, `favorites-${userId}`);
    const querySnapshot = await getDocs(docRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      if (docData) {
        data.push(docData);
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getFavoriteCocktails = createAsyncThunk(
  "favorite/get",
  async (userId, thunkAPI) => {
    try {
      favoriteRequest(userId);
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
      const dockRef = collection(exportFirebase.db, `favorites-${userId}`);
      await setDoc(doc(dockRef, itemId), {
        itemId,
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFavorite = createAsyncThunk(
  "favorite/remove",
  async ({ data }, thunkAPI) => {
    const { itemId, userId } = data;
    try {
      const dockRef = collection(exportFirebase.db, `favorites-${userId}`);
      await deleteDoc(doc(dockRef, itemId));
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
