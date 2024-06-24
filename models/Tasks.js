
const {createConnection} = require('../config/dbconnect');


const Task = {

    addTask: async (description, due_date, status, current_stage_id, type, assigned_to, department_id) => {
const connection = await createConnection();
        try {
            const query = `INSERT INTO Tasks (description, due_date, status, current_stage_id, type, assigned_to, department_id)
                           VALUES (?, ?, ?, ?, ?, ?, ?)`;
            const values = [description, due_date, status, current_stage_id, type, assigned_to, department_id];
            return await connection.execute(query, values);
        } catch (error) {
            
        }finally {
            await connection.end();
        }
    },

    getTasksByType: async (type, limit, offset) => {
        const connection = await createConnection();
       try {
         const query = `SELECT * FROM Tasks WHERE type = ? LIMIT ? OFFSET ?`;
         const values = [type, limit, offset];
         const [results] = await connection.execute(query, values);
         return results;
       } catch (error) {
        
       }
       finally {
        await connection.end();
       }
    }
};

module.exports = Task;
