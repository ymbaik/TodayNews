// components/CardNews.js
import React from 'react';

const CardNews = ({ title, content, image }) => {
    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
};

export default CardNews;