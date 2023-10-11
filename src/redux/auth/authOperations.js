import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import exportFirebase from "../../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const getAuth = createAsyncThunk(
  "auth/singIn",
  async (_, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      (async () => {
        try {
          const result = await signInWithPopup(exportFirebase.auth, provider);
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          const user = result.user;

          if (result && credential) {
            resolve({ token, user });
          }
        } catch (error) {
          reject(error);
        }
      })();
    });
    return promise
      .then((result) => result)
      .catch((error) => rejectWithValue(error.message));
  }
);

export const singOut = createAsyncThunk(
  "auth/singOut",
  async (_, { rejectWithValue }) => {
    const promise = new Promise((resolve, reject) => {
      (async () => {
        try {
          if (exportFirebase.auth.currentUser === null) {
            throw new Error("You are still authorized");
          }
          await signOut(exportFirebase.auth);
          if (exportFirebase.auth.currentUser === null) {
            resolve(false);
          }
        } catch (error) {
          reject(error);
        }
      })();
    });
    return promise
      .then((result) => result)
      .catch((error) => rejectWithValue(error.message));
  }
);
