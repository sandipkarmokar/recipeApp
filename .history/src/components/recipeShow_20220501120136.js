import React from 'react';
import chevronright from "../images/chevron-double-right.png"


const RecipeShow = ({ query, recipeData, isRecipeLoading }) => {
    console.log(recipeData);
    if (isRecipeLoading) {
        <p>Loading....</p>;
    }
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <div className="info">
                    <img src={recipeData.image_url} alt="" />

                    <div className="recipe-info">
                        <div className="sub-info">
                            <p className="title">{recipeData.title}</p>
                            <p className="publisher">{recipeData.publisher}</p>
                        </div>
                    </div>
                </div>
                <div className="recipe-ingredients">
                    <p className="heading">Ingredients</p>
                    <div className="recipe-ingredient-item">
                        {recipeData.ingredients.map((el) => {
                            return <div className="item">
                                <img src= alt="" />
                            </div>;
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
