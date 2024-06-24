
const express = require('express');
const router = express.Router();
const taskController = require('../../controllers/Tasks/TaskController');

router.post('/addtasks', taskController.addTask);
router.get('/tasks-by-type', taskController.getTasksByType);

module.exports = router;
