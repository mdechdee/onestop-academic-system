import { NextApiHandler } from 'next';
import { query } from '../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    const { code } = req.query;
    try {
        if(!code) return res.status(400).json({ message: '`code` required'});
        if(code.toString().length != 5 ) return res.status(400).json({ message: '`code` must be a string of 5 characters' });
        const results = await query(`
            SELECT * FROM courses
            ORDER BY department, name
            WHERE code = ?
        `, );
        return res.json(results);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}