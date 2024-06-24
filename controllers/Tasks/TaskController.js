




const Task = require('../../models/Tasks');

const addTask = async (req, res) => {
    const { description, due_date, status, current_stage_id, type, assigned_to, department_id } = req.body;

    if (!description || !due_date || !status || !type || !assigned_to || !department_id) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        let abc =await Task.addTask(description, due_date, status, current_stage_id, type, assigned_to, department_id);
        res.status(201).json({ message: 'Task added successfully' });
        console.log(req.body)
        

    } catch (error) {
        console.error('Error adding task:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};



const getTasksByType = async (req, res) => {
    const { type } = req.query;
    const limit = parseInt(req.query.limit, 10) || 10;
    const offset = parseInt(req.query.offset, 10) || 0;

    if (!type) {
        return res.status(400).json({ error: 'Type parameter is required' });
    }

    try {
        const tasks = await Task.getTasksByType(type, limit, offset);
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Error fetching tasks by type:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = {
    addTask,
    getTasksByType
};
