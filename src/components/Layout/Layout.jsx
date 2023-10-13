import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { LayoutContailer } from "./Layout.styled";
import { Test } from "../Test/Test";
import { useEffect, useState } from "react";
import {
  deleteFavorite,
  getRandomCocktail,
} from "../../redux/cocktails/cocktailsOperations";
import { useDispatch } from "react-redux";

export const Layout = ({
  changeContent,
  setChangeContent,
  setSelectedButton,
}) => {
  return (
    <LayoutContailer>
      <Header
        setChangeContent={setChangeContent}
        setSelectedButton={setSelectedButton}
      />
      <Outlet ppp={"ppp"} />

      <Test />
    </LayoutContailer>
  );
};
