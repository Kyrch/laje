import { NextApiRequest, NextApiResponse } from "next";

const GUILD_ID = '1062190604718714922';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}`, {
            headers: {
                'Authorization': `Bot ${process.env.DISCORD_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch server data');
        }

        const serverData = await response.json();

        res.status(200).json(serverData);
    } catch (error) {
        console.error('Error fetching server avatar:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}