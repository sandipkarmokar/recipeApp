import React from 'react';
import data from './data';

const ListView = ({ recipeList, setRecipeId }) => {
    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {recipeList.map((el) => {
                    return (
                        <div
                            key={el.recipe_id}
                            onClick={() => console.log('hello')}
                            className="recipe-item"
                        >
                            <img src={el.image_url} alt="" />
                            <div className="info">
                                <p className="title">{el.title}</p>
                                <p className="publisher">{el.publisher}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListView;
