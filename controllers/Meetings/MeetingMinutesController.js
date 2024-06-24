// controllers/MeetingMinutesController.js
const MeetingMinutes = require('../../models/MeetingMinutes');


const addMeetingMinutes = async (req, res) => {
  const { meeting_id, user_id, minutes, created_at } = req.body;

  if (!meeting_id || !user_id || !minutes || !created_at) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newMeetingMinutes = new MeetingMinutes(meeting_id, user_id, minutes, created_at);
    const minutesId = await newMeetingMinutes.save();
    res.status(201).json({ message: 'Meeting minutes added successfully', minutesId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add meeting minutes' });
  }
};

module.exports = {
  addMeetingMinutes
};
