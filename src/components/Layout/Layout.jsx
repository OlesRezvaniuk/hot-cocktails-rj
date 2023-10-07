import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { LayoutContailer } from "./Layour.styled";

export const Layout = () => {
  return (
    <LayoutContailer>
      <Header />
      <Outlet />
    </LayoutContailer>
  );
};
