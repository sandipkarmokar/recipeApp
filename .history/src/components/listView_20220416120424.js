import React from 'react';

import image from '../components/food.jpg';

const data = [
    {
        id: 1,
        img: image,
        name: 'random burger which is best',
        publisher: 'BBC FOOD',
    },
];

const ListView = () => {
    return (
        <>
            <img src={image} alt="" />
        </>
    );
};

export default ListView;
