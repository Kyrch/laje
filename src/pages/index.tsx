import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import InviteCard from '@/components/InviteCard';

interface Admin {
    name: string;
    imageUrl: string;
};

const CardsContainer: React.FC = () => {
    const [admins, setAdmins] = useState<Admin[]>([]);

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

        fetchAdmins();
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
                    imageUrl={`https://media.discordapp.net/attachments/1093626949814997043/1178395667920584754/ezgif.com-gif-maker.gif?ex=67d5c0fc&is=67d46f7c&hm=d67b50ca167e10acb488ee8939c2fc973eb529041da3275d6c0f8f530c8778c0&=&width=256&height=238`}
                />
            </div>
        </div>
    );
};

export default CardsContainer;