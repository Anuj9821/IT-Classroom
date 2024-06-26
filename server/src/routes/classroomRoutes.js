const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const classroomController = require('../controllers/classroomController');

router.post('/create', classroomController.createClassroom);

router.post('/upload/:classroomId', authMiddleware, classroomController.uploadFile);

router.post('/join/:classroomId',  classroomController.joinClassroom);

router.get('/files/:classroomId', authMiddleware, classroomController.viewFiles);

router.get('/home', classroomController.displayClassroom);

module.exports = router;