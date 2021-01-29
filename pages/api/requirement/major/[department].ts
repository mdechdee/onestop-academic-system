import { NextApiHandler } from 'next';
import { query } from '../../../../lib/db';

const handler: NextApiHandler = async (req,res) => {
    try {
        const param: string = <string>req.query.department;
        const department: string = param.split("-").join(" ");
        const results = await query(`
            SELECT * from major_requirement
            WHERE department = ?
        `, department);
        return res.json(results[0]);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
}

export default handler;