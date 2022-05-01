import React from 'react';
import recipeData from './recipeData';

const RecipeShow = ({ recipeData, isRecipeLoading }) => {
    console.log(isRecipeLoading);
    if (isRecipeLoading && query) {
        <p>Loading....</p>;
    }
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <div className="info">
                    <img src={recipeData.recipe.image_url} alt="" />

                    <div className="recipe-info">
                        <div className="sub-info">
                            <p className="title">{recipeData.recipe.title}</p>
                            <p className="publisher">
                                {recipeData.recipe.publisher}
                            </p>
                        </div>
                        <div className="recipe-data">
                            <p>4 servings</p>
                            <p>60 minutes</p>
                        </div>
                    </div>
                </div>
                <div className="recipe-ingredients">
                    <p className="heading">Ingredients</p>
                    <div className="recipe-ingredient-item">
                        {recipeData.recipe.ingredients.map((el) => {
                            return <p>$$ {el}</p>;
                        })}
                    </div>
                    <p className="footer">
                        For direction on how to cook visit{' '}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RecipeShow;
