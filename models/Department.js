// models/Department.js
const { createConnection } = require('../config/dbconnect');

const Department = {
    getAllDepartments: async () => {
        let connection;
        try {
            connection = await createConnection();
            const [rows] = await connection.execute('SELECT * FROM Departments');
            return rows;
        } catch (error) {
            console.error('Error executing query:', error.message);
            throw error;
        } finally {
            if (connection) {
                await connection.end();
            }
        }
    },
    // getDepartmentById: async (id) => {
    //     let connection;
    //     try {
    //         connection = await createConnection();
    //         const [rows] = await connection.execute('SELECT * FROM Departments WHERE department_id = ?', [id]);
    //         return rows;
    //     } catch (error) {
    //         console.error('Error executing query:', error.message);
    //         throw error;
    //     } finally {
    //         if (connection) {
    //             await connection.end();
    //         }
    //     }
    // }
};

module.exports = Department;
