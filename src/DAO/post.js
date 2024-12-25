const { runQuery } = require('../lib/database');

const addPost = async (title, content, lec_id) => {
    const query = 'INSERT INTO posts (title, content, lecture) VALUES (?, ?, ?)';
    return await runQuery(query, [title, content, lec_id]);
}

const getPostsByLecture = async (lec_id) => {
    const query = 'SELECT post_id, title, content, created FROM posts WHERE lecture = ? ORDER BY created DESC ';
    return await runQuery(query, [lec_id]);
}

const getPostsByUser = async (user_id) => {
    const query = 'SELECT post_id, title, content, created FROM posts WHERE lecture IN (SELECT lecture FROM takes WHERE user = ?) ORDER BY created DESC ';
    return await runQuery(query, [user_id]);
}

module.exports = {
    addPost,
    getPostsByLecture,
    getPostsByUser
}