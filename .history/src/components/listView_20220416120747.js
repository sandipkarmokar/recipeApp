import React from 'react';
import data from './data';

const ListView = ({ data }) => {
    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {data.map((el) => {
                    return <div className="recipe-item"></div>;
                })}
            </div>
        </div>
    );
};

export default ListView;
