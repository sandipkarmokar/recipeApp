import React from 'react';

const RecipeShow = ({ recipe }) => {
    if (!recipe.title) {
        return <h1>LOading....</h1>;
    }
    <div className="recipeShow">
        <div className="recipeShow-container">
            <p>{recipe.title}</p>
        </div>
    </div>;
};

export default RecipeShow;
