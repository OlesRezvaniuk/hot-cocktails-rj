import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="favorite-cocktails" element={"favorite cocktails page"} />
        <Route
          path="favorite-ingridients"
          element={"favorite ingridients page"}
        />
      </Route>
    </Routes>
  );
}

export default App;
