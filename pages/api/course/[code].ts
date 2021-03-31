import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    try {
        const { code } = req.query;
        if(!code) return res.status(400).json({ message: '`code` required'});
        if(typeof code !== 'string') return res.status(400).json({ message: '`code` must be a string' });
        const results = await query(`
            SELECT * FROM course
            WHERE course_id = ?
        `, code );
        return res.json(results[0]);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export default handler;