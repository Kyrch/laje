import { NextApiRequest, NextApiResponse } from 'next';

const GUILD_ID = '1062190604718714922';
const ADMIN_ROLE_ID = '1095479350280851617';

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

        const data = await response.json();
        const adminData = data
            .filter((member: any) => member.roles.includes(ADMIN_ROLE_ID))
            .map((member: any) => ({
                name: member.user.global_name || member.user.username,
                imageUrl: member.user.avatar ? `https://cdn.discordapp.com/avatars/${member.user.id}/${member.user.avatar}.png` : 'default-avatar-url.png'
            }));

        res.status(200).json(adminData);
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}