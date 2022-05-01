import React from 'react';

const ListView = ({ recipeList, setRecipeId, fetchRecipe }) => {
    console.log(recipeList);
    const handleRecipe = (id) => {
        let numberId = parseInt(id);
        console.log(typeof numberId);
        setRecipeId(id);
        fetchRecipe();
    };

    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {recipeList.map((el) => {
                    console.log(typeof el.recipe_id);
                    return (
                        <div className="recipe-item">
                            <p>{el.title}</p>
                            <img src={el.image_url} alt="" />
                            <p>{el.recipe_id}</p>
                            <p
                                onClick={() => {
                                    handleRecipe(el.recipe_id);
                                }}
                            >
                                Know More
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListView;
