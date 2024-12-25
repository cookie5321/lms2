const { runQuery } = require('../database');

const getLectures = async () => {
    const query = 'SELECT lec_id, name, lecturer FROM lectures';
    return await runQuery(query);
};

const createLecture = async (name, user_id) => {
    const query = 'INSERT INTO lectures (name, lecturer) VALUES (?, ?)';
    return await runQuery(query, [name, user_id]);
}

const getLecturesByLecturer = async (user_id) => {
    const query = 'SELECT lec_id, name FROM lectures WHERE lecturer = ?';
    return await runQuery(query, [user_id]);
}

const registerLecture = async (user_id, lec_id) => {
    const query = 'INSERT INTO takes (user, lecture) VALUES (?, ?)';
    return await runQuery(query, [user_id, lec_id]);
}

const getLecturesByUser = async (user_id) => {
    const query = 'SELECT lec_id, name FROM lectures WHERE lec_id IN (SELECT lecture FROM takes WHERE user = ?)';
    return await runQuery(query, [user_id]);
}

const getUsersByLecture = async (lec_id) => {
    const query = 'SELECT user FROM takes WHERE lecture = ?';
    return await runQuery(query, [lec_id]);
}

const removeUserFromLecture = async (user_id, lec_id) => {
    const query = 'DELETE FROM takes WHERE user = ? AND lecture = ?';
    return await runQuery(query, [user_id, lec_id]);
}