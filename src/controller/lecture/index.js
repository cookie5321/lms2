const { Router } = require('express');

const ctrl = require('./ctrl');
const { authRequired } = require('../auth/middleware');
const router = Router();

router.get('/:lectureId(\\d+)/apply', authRequired, ctrl.registerLecture);
router.get('/:lectureId(\\d+)/write', authRequired, ctrl.writePostForm);
router.post('/:lectureId(\\d+)/write', authRequired, ctrl.writePost);
router.get('/:lectureId(\\d+)', authRequired, ctrl.showLecture);

module.exports = router;