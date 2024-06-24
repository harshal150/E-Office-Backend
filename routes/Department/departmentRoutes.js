// routes/departmentRoutes.js
const express = require('express');
const router = express.Router();
const departmentController = require('../../controllers/Department/departmentController');

router.get('/departments', departmentController.getAllDepartments);
// router.get('/departments/:id', departmentController.getDepartmentById);

module.exports = router;
