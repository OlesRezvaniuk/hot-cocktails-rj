import { modifyIngredientInfo } from "./IngredientsModalHelpers/IngredientsModalHelpers";
import { nanoid } from "nanoid";

export const IngredientsModal = ({ cocktailDetails }) => {
  const { data } = cocktailDetails.ingredients;
  return (
    <div
      style={{
        width: 300,

        background: "grey",
        position: "absolute",
      }}
    >
      <h3>{data.strIngredient}</h3>
      <h4>{data.strType}</h4>
      <p>{data.strDescription}</p>
      <ul>
        {modifyIngredientInfo(data).map((item) => {
          return <li key={nanoid()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};
