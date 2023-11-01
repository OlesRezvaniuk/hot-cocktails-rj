import {
  addFavorite,
  removeFavorite,
} from "../../../redux/cocktails/cocktailsOperations";

export async function favoriteActionRequests(
  changeFavorite,
  pathname,
  item,
  dispatch,
  auth
) {
  if (!changeFavorite) {
    pathname !== "/favorite-cocktails"
      ? await dispatch(
          addFavorite({
            data: { itemId: item.idDrink, userId: auth.uid },
          })
        )
      : await dispatch(
          removeFavorite({
            data: { itemId: item.idDrink, userId: auth.uid },
          })
        );
    console.log("add");
  } else {
    console.log("remove");
    await dispatch(
      removeFavorite({
        data: { itemId: item.idDrink, userId: auth.uid },
      })
    );
  }
}
