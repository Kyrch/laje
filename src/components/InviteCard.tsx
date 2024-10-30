import { IconBrandDiscordFilled } from '@tabler/icons-react';
import React from 'react';

interface InviteCardProps {
    serverName: string;
    inviteLink: string;
    imageUrl: string;
}

const InviteCard: React.FC<InviteCardProps> = ({ serverName, inviteLink, imageUrl }) => {
    return (
        <div className="flex z-20 flex-col gap-4 items-center">
            <div className='flex flex-col items-center'>
                <img src={imageUrl} alt="Server Image" className="w-28 h-28 rounded-full mb-4" />
                <h2 className="text-lg lg:text-2xl text-discordBlue font-bold">{serverName}</h2>
            </div>
            <a href={inviteLink} target="_blank" rel="noopener noreferrer">
                <button className="bg-discordBlue text-loveLiveWhite flex flex-row items-center gap-2 px-6 py-3 rounded-full text-md md:text-lg shadow-md hover:bg-discordBlueSecondary transition">
                    <IconBrandDiscordFilled />
                    Entrar no Discord
                </button>
            </a>
        </div>
    );
};

export default InviteCard;