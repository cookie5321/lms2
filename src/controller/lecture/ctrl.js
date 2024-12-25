const { LectureDAO, PostDAO } = require('../../DAO');

const registerLecture = async (req, res, next) => {
    try {
        if (req.session.user.role != 1) throw new Error('FORBIDDEN');
        const { lectureId } = req.params;

        LectureDAO.registerLecture(req.session.user.user_id, lectureId);
        return res.redirect(`/lectures`);
    } catch (err) {
        return next(err);
    }
};

const showLecture = async (req, res, next) => {
    try {
        const { lectureId } = req.params;
        console.log(lectureId);
        const user = req.session.user;
        const lecture = await LectureDAO.getLectureById(lectureId);
        console.log(lecture);
        const posts = await PostDAO.getPostsByLecture(lectureId);
        return res.render('show-lecture.pug', { posts, user, lecture });
    } catch (err) {
        return next(err);
    }
}

const writePostForm = async (req, res, next) => {
    try {
        const user = req.session.user;
        return res.render('write-post.pug', { user });
    } catch (err) {
        return next(err);
    }
}

const writePost = async (req, res, next) => {
    try {
        const { lectureId } = req.params;
        const { post, title } = req.body;
        console.log(post, title);
        if (!post) throw new Error('BAD_REQUEST');
        await PostDAO.addPost(title, post, lectureId);
        return res.redirect(`/lecture/${lectureId}`);
    } catch (err) {
        return next(err);
    }
}

module.exports = { registerLecture, showLecture, writePostForm, writePost };