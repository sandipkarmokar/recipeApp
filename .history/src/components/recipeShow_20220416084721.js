import React from 'react';

const RecipeShow = ({ recipe }) => {
    if (!recipe) {
        return <p>Loading....</p>;
    }

    return <p>{recipe.title}</p>;
    // <div className="recipeShow">
    //     <div className="recipeShow-container">
    //         <p>{recipe.title}</p>
    //     </div>
    // </div>;
};

export default RecipeShow;
