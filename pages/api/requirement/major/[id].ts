import { NextApiHandler } from 'next';
import { query } from '../../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    const { id } = req.query;
    try {
        if(!id) return res.status(400).json({ message: '`id` required' });
        if(typeof parseInt(id.toString()) !== 'number' ) res.status(400).json({ message: '`id` must be a number' });
        const result = await query(`
            SELECT * FROM major_requirement
            WHERE id = ?
        `, id );

        return res.json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

export default handler;