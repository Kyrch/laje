import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import InviteCard from '@/components/InviteCard';

interface Admin {
    name: string;
    imageUrl: string;
};

const GUILD_ID = '1062190604718714922';

const CardsContainer: React.FC = () => {
    const [admins, setAdmins] = useState<Admin[]>([]);
    const [serverAvatar, setServerAvatar] = useState<string | null>(null);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await fetch('/api/admins');

                if (!response.ok) {
                    throw new Error('Failed to fetch admins');
                }

                const data = await response.json();
                setAdmins(data);
            } catch (error) {
                console.error('Error fetching admins:', error);
            }
        };

        const fetchServerAvatar = async () => {
            try {
                const response = await fetch('/api/server');

                if (!response.ok) {
                    throw new Error('Failed to fetch server avatar');
                }

                const data = await response.json();
                setServerAvatar(data.icon);
            } catch (error) {
                console.error('Error fetching server avatar:', error);
            }
        };

        fetchAdmins();
        fetchServerAvatar();
    }, []);

    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row">
            <div className="flex-1 flex flex-col justify-center items-center relative">
                <div className="absolute inset-0 bg-loveLiveBg bg-cover bg-center filter brightness-50"></div>
                <div className="relative z-10 flex flex-col gap-4 items-center p-2">
                    <div className="bg-opacity-60 p-4 text-center">
                        <p className="text-loveLiveWhite text-md sm:text-lg lg:text-2xl font-bold">
                            {"Comunidade Brasileira de Love Live! com o objetivo de unir o pessoal que gosta de algo em comum <3"}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        {admins.map((admin, index) => (
                            <Card key={index} name={admin.name} imageUrl={admin.imageUrl} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="md:flex-1 lg:flex-none lg:w-1/4 p-8 flex flex-col items-center justify-center bg-loveLiveWhite relative">
                <InviteCard
                    serverName="Laje da Otonokizaka"
                    inviteLink="https://discord.gg/hRtKQ79vU6"
                    imageUrl={`https://cdn.discordapp.com/icons/${GUILD_ID}/${serverAvatar}.gif`}
                />
            </div>
        </div>
    );
};

export default CardsContainer;