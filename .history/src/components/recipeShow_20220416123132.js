import React from 'react';
import recipeData from './recipeData';

const RecipeShow = () => {
    console.log(recipeData);
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <p>Show Recipe</p>
            </div>
        </div>
    );
};

export default RecipeShow;
