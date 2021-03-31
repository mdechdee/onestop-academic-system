import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (_,res) => {
    try{
        const result = await query(`
            SELECT * FROM student
            ORDER BY id
        `)
        return res.json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;