const mysql = require('mysql2/promise');

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

console.log(DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME);
const pool = mysql.createPool({
    host: DB_HOST || 'localhost',
    port: DB_PORT || 3306,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    dateStrings: true
});

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection();
    try {
        const sql = conn.format(pstmt, data);
        const [result] = await conn.query(sql);
        return result;
    } finally {
        conn.release();
    }
};

module.exports = { runQuery };