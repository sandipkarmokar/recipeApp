import React from 'react';

const ListView = ({ recipeList, setRecipeId, fetchRecipe }) => {
    console.log(recipeList);
    const handleRecipe = (id) => {
        setRecipeId(id);
        fetchRecipe();
    };
    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {recipeList.map((el) => {
                    return (
                        <>
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
                        </>
                    );
                })}
            </div>
        </div>
    );
};

export default ListView;
