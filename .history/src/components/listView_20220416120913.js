import React from 'react';
import data from './data';

const ListView = ({ data }) => {
    return (
        <div className="recipeList">
            <div className="recipeList-container">
                {data.map((el) => {
                    console.log(data);
                    return (
                        <div className="recipe-item">
                            <img src={el.image} alt="" />
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
