import { firebaseRequest } from "../firebase/firebaseRequests";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector } from "../redux/auth/authSelector";
import { useEffect, useState } from "react";
import { cocktailsSelector } from "../redux/cocktails/cocktailsSelector";
import { useDispatch } from "react-redux";
import { getFavoriteCocktails } from "../redux/cocktails/cocktailsOperations";
import { nanoid } from "@reduxjs/toolkit";

export const FavoriteCocktailsPage = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(authSelector);
  const cocktails = useSelector(cocktailsSelector);
  const arr = [cocktails.favoriteCocktails];
  console.log(arr[0]);

  let arrayOfObjects = [];

  for (var key in arr[0]) {
    var newObj = { id: parseInt(key), value: arr[0][key] };
    arrayOfObjects.push(newObj);
  }

  console.log(arrayOfObjects);

  useEffect(() => {
    dispatch(getFavoriteCocktails({ id: auth.uid }));
  }, []);

  return (
    <>
      <>
        {arrayOfObjects.map((item) => {
          return <div key={nanoid()}>{item.value}</div>;
        })}
      </>
    </>
  );
};
