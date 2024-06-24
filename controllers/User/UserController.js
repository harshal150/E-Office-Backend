// controllers/userController.js
const User = require('../../models/Users');

const getUsersByDepartmentId = async (req, res) => {
    const { departmentId } = req.params;
    try {
        const users = await User.getUsersByDepartmentId(departmentId);
        if (users.length === 0) {
            return res.status(404).json({ error: 'No users found for this department' });
        }
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    getUsersByDepartmentId
};
