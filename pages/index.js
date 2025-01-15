// pages/index.js
import React from 'react';
import CardNews from '../components/CardNews';

const cardData = [
    {
        title: 'The Road Ahead',
        content: 'The road ahead might be a winding path.',
        image: 'https://via.placeholder.com/300x200',
    },
    {
        title: 'From Top Down',
        content: 'See your surroundings from a new perspective.',
        image: 'https://via.placeholder.com/300x200',
    },
    // 추가 카드 데이터...
];

const Home = () => {
    return (
        <div className="container">
            <div className="hero-section">
                <h1>Card News</h1>
                <p>Explore the World Through Our Eyes</p>
                <button className="button">View Latest Posts</button>
            </div>
            <div className="featured-section">
                <h2>Featured Posts</h2>
            </div>
            <div className="card-container">
                {cardData.map((post, index) => (
                    <CardNews key={index} {...post} />
                ))}
            </div>
        </div>
    );
};

export default Home;