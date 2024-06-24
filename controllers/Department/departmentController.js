// controllers/departmentController.js
const Department = require('../../models/Department');

const getAllDepartments = async (req, res) => {
    try {
        const departments = await Department.getAllDepartments();
        res.status(200).json(departments);
    } catch (error) {
        console.error('Error fetching departments:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// const getDepartmentById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const department = await Department.getDepartmentById(id);
//         if (department.length === 0) {
//             return res.status(404).json({ error: 'Department not found' });
//         }
//         res.status(200).json(department[0]);
//     } catch (error) {
//         console.error('Error fetching department:', error.message);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };

module.exports = {
    getAllDepartments,
    // getDepartmentById
};
