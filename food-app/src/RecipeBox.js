import React from "react";
import "./RecipeBox.css";

export default function RecipeBox({ recipe }) {
  return (
    <div className="RecipeBox">
      <img className="recipe__img" src={recipe["recipe"]["image"]} />
      <p className="recipe__name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
