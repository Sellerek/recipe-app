import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./Recipe";


const App = () => {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    const getRecipes = () => {
      var proxyUrl = "https://cors-anywhere.herokuapp.com/",
        targetUrl = `http://www.recipepuppy.com/api/?i=${query}&q=${query}&p=3`;
      fetch(proxyUrl + targetUrl)
        .then(blob => blob.json())
        .then(data => {
          console.log(data.results)
          return setRecipes(data.results);
        })
      
        .catch(error => {
          console.log(error);
          return error;
        });
    };

    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <header>
        <h1>Get the recipe!</h1>
        <p>Insert ingredient and find the recipes</p>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            placeholder="What ingredient do you have?"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </header>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.href}
            title={recipe.title}
            image={recipe.thumbnail}
            ingredients={recipe.ingredients}
            href={recipe.href}
          />
        ))}
      </div>
      <footer>Food Lover 2019</footer>
    </div>
  );
};

export default App;
