const { runQuery } = require('../lib/database');

const getUserData = async username => {
    const sql = 'SELECT user_id, username, password, name, std_num, role from users where username = ?';
    const result = await runQuery(sql, [username]);
    return result[0];
}

const createUser = async (username, password, name, std_num, role) => {
    const sql = 'INSERT INTO users (username, password, name, std_num, role) VALUES (?, ?, ?, ?, ?)';
    return await runQuery(sql, [username, password, name, std_num, role]);
}

module.exports = {
    getUserData,
    createUser
}