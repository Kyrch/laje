import React from 'react';

interface CardProps {
    name: string;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ name, imageUrl }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-loveLiveWhite">
                <img src={imageUrl} alt={name} className="w-full h-full object-cover " />
            </div>
            <h3 className="text-md sm:text-xl text-loveLiveWhite font-semibold">{name}</h3>
        </div>
    );
};

export default Card;