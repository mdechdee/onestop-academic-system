import { NextApiRequest, NextApiResponse } from 'next'
import mysql from 'mysql'

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'onestopdb'
})

connection.connect();

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello' })
}

connection.end(function (err) {
  
});

connection.destroy();