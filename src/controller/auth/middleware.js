const { LectureDAO } = require('../../DAO');

const authRequired = async (req, res, next) => {
    try {
        if (req.session.user) return next();
        else return res.redirect('/auth/sign_in');
    } catch (err) {
        return next(err);
    }
};

const authProfessorRequired = async (req, res, next) => {
    try {
        if (req.session.user.role == 0) return next();
        else throw new Error('UNAUTHORIZED');
    } catch (err) {
        return next(err);
    }
};

const authAccessToLecture = async (req, res, next) => {
    try {
        const { lectureId } = req.params;
        const { user } = req.session;
        if (!req.session.user) return res.redirect('/auth/sign_in');
        const lecture = await LectureDAO.getLectureById(lectureId);
        if (user.role == 0 && lecture.lecturer != user.user_id) throw new Error('UNAUTHORIZED');
        return next();
    } catch (err) {
        return next(err);
    }
};

module.exports = { authRequired, authProfessorRequired, authAccessToLecture };