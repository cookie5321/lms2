const { LectureDAO } = require('../../DAO');

const authRequired = async (req, res, next) => {
    try {
        if (req.session.user) return next();
        else return res.redirect('/auth/sign_in');
    } catch (err) {
        return next(err);
    }
};

const professorRequired = async (req, res, next) => {
    try {
        if (!req.session.user) return res.redirect('/auth/sign_in');
        if (req.session.user.role == 0) return next();
        else throw new Error('UNAUTHORIZED');
    } catch (err) {
        return next(err);
    }
};

const studentRequired = async (req, res, next) => {
    try {
        if (!req.session.user) return res.redirect('/auth/sign_in');
        if (req.session.user.role == 1) return next();
        else throw new Error('UNAUTHORIZED');
    } catch (err) {
        return next(err);
    }
};

const isAccessibleToLecture = async (req, res, next) => {
    try {
        const { lectureId } = req.params;
        const { user } = req.session;
        if (!req.session.user) return res.redirect('/auth/sign_in');
        const lecture = await LectureDAO.getLectureById(lectureId);
        const learners = await LectureDAO.getUsersByLecture(lectureId);
        console.log(lecture, learners);
        if (user.role == 0 && lecture.lecturer == user.name || user.role == 1 && learners.map(({user: x}) => x).includes(user.user_id)) return next();
        throw new Error('UNAUTHORIZED');
    } catch (err) {
        return next(err);
    }
};

module.exports = { authRequired, professorRequired, isAccessibleToLecture, studentRequired };