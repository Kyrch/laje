import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
    animationDelay: number;
}

const Card: React.FC<CardProps> = ({ name, imageUrl, animationDelay }) => {
    return (
        <div
            className="w-48 h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl opacity-0 animate-fade-in"
            style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
                color: '#fff',
                animationDelay: `${animationDelay}ms`,
                animationFillMode: 'forwards'
            }}
        >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
        </div>
    );
};

export default Card;