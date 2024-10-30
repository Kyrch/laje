import React from 'react';

interface InviteCardProps {
    serverName: string;
    inviteLink: string;
    imageUrl: string;
}

const InviteCard: React.FC<InviteCardProps> = ({ serverName, inviteLink, imageUrl }) => {
    return (
        <div className="bg-purple-40 text-white rounded-lg p-4 shadow-lg flex flex-col items-center w-64 mb-8">
            <img src={imageUrl} alt="Server Image" className="w-16 h-16 rounded-full mb-4" />
            <h2 className="text-lg font-bold">{serverName}</h2>
            <div className="text-sm text-gray-400 mb-4">
            </div>
            <a
                href={inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full text-center"
            >
                Entrar no Discord
            </a>
        </div>
    );
};

export default InviteCard;
