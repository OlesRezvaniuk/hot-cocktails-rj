import { firebaseRequest } from "../firebase/firebaseRequests";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { authSelector } from "../redux/auth/authSelector";
import { useEffect, useState } from "react";

export const FavoriteCocktailsPage = () => {
  const { auth } = useSelector(authSelector);
  const [favorite, setFavorite] = useState(null);

  async function getFavoriteId() {
    const data = await firebaseRequest.getFavorite(auth.uid);
    setFavorite(data);
  }

  useEffect(() => {
    getFavoriteId();
  }, []);

  return (
    <>
      <>Favorite cocktails page ogm:</>
      <>
        {favorite !== null &&
          favorite.map((item) => {
            return <div key={item.itemId}>{item.itemId}</div>;
          })}
      </>
    </>
  );
};
