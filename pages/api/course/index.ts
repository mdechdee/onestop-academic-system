import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    try {
        const results = await query(`
            SELECT * FROM courses
            ORDER BY code
        `);
        return res.json(results);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export default handler;