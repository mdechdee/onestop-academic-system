import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    try {
        const { code } = req.query;
        if(!code) return res.status(400).json({ message: '`code` required'});
        if(typeof code !== 'string' && code.length !== 5 ) return res.status(400).json({ message: '`code` must be a string of 5 characters' });
        const results = await query(`
            SELECT * FROM courses
            WHERE code = ?
        `, code );
        return res.json(results);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export default handler;