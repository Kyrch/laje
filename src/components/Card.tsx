import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
    return (
        <div
            className="w-48 h-64 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg text-center"
            style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8), rgba(118, 75, 162, 0.8))',
                color: '#fff'
            }}
        >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-semibold">{name}</h3>
        </div>
    );
};

export default Card;
