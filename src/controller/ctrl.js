const { LectureDAO, UserDAO } = require('../DAO');
const { getByteLength } = require('../lib/byte-length');

const indexPage = async (req, res, next) => {
    try {
        const { user } = req.session;
        if (user) return res.redirect('/lectures');
        return res.render('index.pug', { user });
    } catch (err) {
        return next(err);
    }
}

const lecturesPage = async (req, res, next) => {
    try {
        const { user } = req.session;
        let all_lectures = await LectureDAO.getLectures();
        const lectures = user.role == 0 ? 
            await LectureDAO.getLecturesByLecturer(user.user_id) : 
            await LectureDAO.getLecturesByUser(user.user_id);
        all_lectures = all_lectures.filter(lec => !lectures.find(myLec => myLec.lec_id == lec.lec_id));
        return res.render('lectures.pug', { user, lectures, all_lectures });
    } catch (err) {
        return next(err);
    }
}

const createLectureForm = async (req, res, next) => {
    try {
        const { user } = req.session;

        return res.render('create-lecture.pug', { user });
    } catch (err) {
        return next(err);
    }
}

const createLecture = async (req, res, next) => {
    try {
        const { user } = req.session;
        const { name } = req.body;
        const { role } = await UserDAO.getUserData(user.username);
        if (role != 0) throw new Error('UNAUTHORIZED')
        if (!name || getByteLength(name) > 64) throw new Error('BAD_REQUEST');

        await LectureDAO.createLecture(name, user.user_id);
        return res.redirect('/lectures');
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    indexPage,
    lecturesPage,
    createLectureForm,
    createLecture
};