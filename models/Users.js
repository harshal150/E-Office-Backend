
const { createConnection } = require('../config/dbconnect');

const User = {
    getUsersByDepartmentId: async (departmentId) => {
        let connection;
        try {
            connection = await createConnection();
            const [rows] = await connection.execute('SELECT * FROM Users WHERE department_id = ?', [departmentId]);
            return rows;
        } catch (error) {
            console.error('Error executing query:', error.message);
            throw error;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    }
};

module.exports = User;
