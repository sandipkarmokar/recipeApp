import React from 'react';

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
