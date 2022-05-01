import React from 'react';
import data from './data';

const ListView = () => {
    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {data.map((el) => {
                    return (
                        <div className="recipe-item">
                            <img src={el.img} alt="" />
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