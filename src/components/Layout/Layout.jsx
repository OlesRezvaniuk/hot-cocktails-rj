import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { LayoutContailer } from "./Layout.styled";
import { useState } from "react";

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
    </LayoutContailer>
  );
};
