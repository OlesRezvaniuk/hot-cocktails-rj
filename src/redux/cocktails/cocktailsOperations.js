import { createAsyncThunk } from "@reduxjs/toolkit";
import exportFirebase from "../../firebase/firebase";
import axios from "axios";
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

async function favoriteRequest(userId) {
  console.log("favorite request");
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
      const data = favoriteRequest(userId);
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

export async function getCocktailById(favoriteCocktails) {
  const arr = [];
  try {
    for (const { itemId } of favoriteCocktails) {
      const { data } = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemId}`
      );
      const res = data.drinks[0];
      arr.push(res);
    }
    return arr;
  } catch (error) {}
}
