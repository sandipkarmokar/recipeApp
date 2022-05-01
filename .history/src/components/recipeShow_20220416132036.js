import React from 'react';
import recipeData from './recipeData';

const RecipeShow = () => {
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <div className="info">
                    <img src={recipeData[0].recipe.image_url} alt="" />

                    <div className="recipe-info">
                        <div className="sub-info">
                            <p className="title">
                                {recipeData[0].recipe.title}
                            </p>
                            <p className="publisher">
                                {recipeData[0].recipe.publisher}
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
                        {recipeData[0].recipe.ingredients.map((el) => {
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
