import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import InviteCard from '@/components/InviteCard';

interface Admin {
    name: string;
    imageUrl: string;
}

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
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 text-white">
            <h1 className="text-4xl font-bold mb-6">Laje da Otonokizaka</h1>
            <p className="mb-10 text-lg text-center">{"Comunidade Brasileira de Love Live! com o objetivo de unir o pessoal que gosta de algo em comum <3"}</p>

            <InviteCard
                serverName="Laje da Otonokizaka"
                inviteLink="https://discord.gg/hRtKQ79vU6"
                imageUrl="https://cdn.discordapp.com/attachments/1093626949814997043/1178395724220735609/renrap.png?ex=67231dca&is=6721cc4a&hm=14a35f15112d007c0d1af47485c6243deea0ac2f1d45ba5bf79c9bf1656f2048&"
            />

            <div className="flex flex-wrap justify-center gap-4">
                {admins.map((admin, index) => (
                    <Card
                        key={index}
                        name={admin.name}
                        imageUrl={admin.imageUrl}
                        animationDelay={index * 100}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;