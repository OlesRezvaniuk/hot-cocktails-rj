import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRandomCocktail = createAsyncThunk(
  "cocktails/",
  async (e, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php",
        e
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
