import React from 'react';
import style from './recipe.module.css';



const Recipe = ({title, image, ingredients, href}) => {

   const addDefaultSrc = (ev) => {
        ev.target.src = "http://img.recipepuppy.com/712456.jpg"
      }

    let uniqueIngredients = [...new Set(ingredients.split(","))];
    return (
        <div className={style.recipe}>
            <h2>{title}</h2>
            <img className={style.img} onError={addDefaultSrc} src={image} alt="recipe" />
            <ul>
            {uniqueIngredients.map(ingredient => (
                <li key={ingredient}>
                    <button onClick="">{ingredient}</button>
                </li>
            ))}</ul>
            <a href={href}>Check the recipe</a>
        </div>
    )
}

export default Recipe;