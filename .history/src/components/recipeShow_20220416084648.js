import React from 'react';

const RecipeShow = ({ recipe }) => {
    console.log(recipe.title);
    if (!recipe) {
        return <p>Loading....</p>;
    }

    return <h1>{recipe.title}</h1>;
    // <div className="recipeShow">
    //     <div className="recipeShow-container">
    //         <p>{recipe.title}</p>
    //     </div>
    // </div>;
};

export default RecipeShow;
