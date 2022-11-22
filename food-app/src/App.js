import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeBox from "./RecipeBox";

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLable, sethealthLable] = useState("select");

  const YOUR_APP_ID = "bf00f5ec";
  const YOUR_APP_KEY = "379ecd1737e00a73c99686a38ec2ba82";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function ToGetRecipes() {
    var res = await Axios.get(url);
    setrecipes(res.data.hits);
    console.log(res.data);
  }

  const submit = (e) => {
    e.preventDefault();
    ToGetRecipes();
  };

  return (
    <div className="app">
      <h1>🍴Food Recipe Genie🧞</h1>
      <form className="app_search_form" onSubmit={submit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />

        <select className="app__healthLabels">
          <option value="null" onClick={() => sethealthLable("select")}>
            Select Type
          </option>
          <option value="vegan" onClick={() => sethealthLable("vegan")}>
            Vegan
          </option>
          <option
            value="vegetarian"
            onClick={() => sethealthLable("vegetarian")}
          >
            Vegetarian
          </option>
          <option
            value="wheat-free"
            onClick={() => sethealthLable("wheat-free")}
          >
            Wheat-free
          </option>
          <option value="soy" onClick={() => sethealthLable("soy")}>
            Soy
          </option>
          <option value="no-sugar" onClick={() => sethealthLable("no-sugar")}>
            No-sugar
          </option>
          <option value="keto" onClick={() => sethealthLable("keto")}>
            Keto
          </option>
          <option value="gluten" onClick={() => sethealthLable("gluten")}>
            Gluten
          </option>
          <option value="dairy" onClick={() => sethealthLable("dairy")}>
            Dairy
          </option>
          <option value="low-fat" onClick={() => sethealthLable("low-fat")}>
            Low-fat
          </option>
          <option value="low-carb" onClick={() => sethealthLable("low-carb")}>
            Low-carb
          </option>
          <option value="balanced" onClick={() => sethealthLable("balanced")}>
            Balanced
          </option>
        </select>
        <input className="app__searchButton" type="submit" value="Search" />
      </form>
      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeBox recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
