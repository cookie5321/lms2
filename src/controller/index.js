const { Router } = require('express');

const ctrl = require('./ctrl');
const auth = require('./auth');
const lecture = require('./lecture');
const { authRequired } = require('./auth/middleware');

const router = Router();

router.get('/', ctrl.indexPage);
router.get('/lectures', authRequired, ctrl.lecturesPage);
router.get('/create_lecture', authRequired, ctrl.createLectureForm);
router.post('/create_lecture', authRequired, ctrl.createLecture);
router.use('/auth', auth);
router.use('/lecture', lecture);

module.exports = router;