const { Router } = require('express');

const ctrl = require('./ctrl');
const { authRequired, isAccessibleToLecture, professorRequired, studentRequired } = require('../auth/middleware');
const router = Router();

router.get('/:lectureId(\\d+)/apply', studentRequired, ctrl.registerLecture);
router.get('/:lectureId(\\d+)/write', professorRequired, isAccessibleToLecture, ctrl.writePostForm);
router.post('/:lectureId(\\d+)/write', professorRequired, isAccessibleToLecture, ctrl.writePost);
router.get('/:lectureId(\\d+)', authRequired, isAccessibleToLecture, ctrl.showLecture);

module.exports = router;