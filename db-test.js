const sqlist = require('sqlite');

async function setup(){
    const db = await sqlite.open('./mydb.sqlite');
    await db.migrate({force: 'last'})
}

setup();