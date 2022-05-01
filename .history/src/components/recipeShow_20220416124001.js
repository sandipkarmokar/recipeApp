import React from 'react';
import recipeData from './recipeData';

const RecipeShow = () => {
    console.log(recipeData[0]);
    return (
        <div className="recipeShow">
            <div className="recipeShow-container">
                <div className="info">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="recipe-info">
                        <div className="sub-info">
                            <p className="title"></p>
                            <p className="publisher"></p>
                        </div>
                        <div className="recipe-data"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeShow;
