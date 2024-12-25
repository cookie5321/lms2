const { runQuery } = require('../lib/database');

const getUserData = async userid => {
    const sql = 'SELECT id, username, password, name, std_num, role from users where userid = ?';
    const result = await runQuery(sql, [userid]);
    return result[0];
}

module.exports = {
    getUserData
}