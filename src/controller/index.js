const { Router } = require('express');

const ctrl = require('./ctrl');
const auth = require('./auth');
const lecture = require('./lecture');

const router = Router();

router.get('/', ctrl.indexPage);
router.get('/lectures', ctrl.lecturesPage);
router.get('/create_lecture', ctrl.createLectureForm);
router.post('/create_lecture', ctrl.createLecture);
router.use('/auth', auth);
router.use('/lecture', lecture);

module.exports = router;