import React from 'react';
import Card from '../components/Card';
import InviteCard from '@/components/InviteCard';

const admins = [
    { name: 'Amanda', imageUrl: 'https://cdn.discordapp.com/avatars/730464471536893983/a73073e0466c857d96f61838912de06d.webp' },
    { name: 'Cardinal', imageUrl: 'https://cdn.discordapp.com/guilds/1062190604718714922/users/414064933979029553/avatars/cfccd6843bd0084222ecd295a0975931.webp' },
    { name: 'Cesar', imageUrl: 'https://cdn.discordapp.com/guilds/1062190604718714922/users/695678602179641425/avatars/6beeee4b9c2117ee2d5d62609584420d.webp' },
    { name: 'Kyrch', imageUrl: 'https://cdn.discordapp.com/avatars/435919278164803586/a_4fa2cfb013e1eb229b810c3e3deca50b.gif' },
    { name: 'Lonely', imageUrl: 'https://cdn.discordapp.com/avatars/458070564918132746/86b36c7689c390bcf4b740c2927ceb73.webp' },
    { name: 'Weebpaisen', imageUrl: 'https://cdn.discordapp.com/avatars/230307246540718080/26ccb3525c37d995c4f8dccb07e432af.webp' },
];

const CardsContainer: React.FC = () => {
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
                    <Card key={index} name={admin.name} imageUrl={admin.imageUrl} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
