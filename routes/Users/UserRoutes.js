// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/User/UserController');

router.get('/departments/:departmentId/users', userController.getUsersByDepartmentId);

module.exports = router;
