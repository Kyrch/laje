import { NextApiRequest, NextApiResponse } from 'next';

const GUILD_ID = '1062190604718714922';
const ADMIN_ROLE_ID = '1095479350280851617';

interface Member {
    avatar: string | null;
    nick: string;
    user: {
        global_name: string;
        username: string;
        id: string;
        avatar: string | null;
    };
    roles: string[];
};

const idOrder = ['435919278164803586', '230307246540718080', '458070564918132746', '730464471536893983', '414064933979029553', '695678602179641425'];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/members?limit=1000`, {
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch members');
        }

        const data: Array<Member> = await response.json();
        const adminData = data
            .filter((member) => member.roles.includes(ADMIN_ROLE_ID))
            .sort((a, b) => idOrder.indexOf(a.user.id) - idOrder.indexOf(b.user.id))
            .map((member) => ({
                name: member.nick || member.user.global_name || member.user.username,
                imageUrl: resolveAvatar(member),
            }));

        res.status(200).json(adminData);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

function resolveAvatar(member: Member) {
    if (member.avatar) {
        return `https://cdn.discordapp.com/guilds/${GUILD_ID}/users/${member.user.id}/avatars/${member.avatar}.png`;
    }

    if (member.user.avatar) {
        return `https://cdn.discordapp.com/avatars/${member.user.id}/${member.avatar || member.user.avatar}.png`;
    }

    return 'default-avatar-url.png';
};