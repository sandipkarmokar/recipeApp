import React from 'react';
import recipeData from './recipeData';

const RecipeShow = () => {
    console.log(recipeData[0].recipe);
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <div className="info">
                    <div className="img">
                        <img src={recipeData[0].recipe.image_url} alt="" />
                    </div>
                    <div className="recipe-info">
                        <div className="sub-info">
                            <p className="title">
                                {recipeData[0].recipe.title}
                            </p>
                            <p className="publisher"></p>
                        </div>
                        <div className="recipe-data">
                            <p>4 servings</p>
                            <p>60 minutes</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeShow;
