
const Meeting = require('../../models/Meeting');

const addMeeting = async (req, res) => {
  const { title, date, createdBy, participants, googleMeetLink } = req.body;

  try {
    const newMeeting = new Meeting(title, date, createdBy, participants, googleMeetLink);
    const meetingId = await newMeeting.save();
    res.status(201).json({ message: 'Meeting added successfully', meetingId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to add meeting' });
  }
};

const getMeetingsByParticipantId = async (req, res) => {
  const { participantId, limit = 10, offset = 0 } = req.query;

  try {
    const meetings = await Meeting.getMeetingsByParticipantId(participantId.toString(), limit, offset);
    res.status(200).json(meetings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch meetings' });
  }
};

module.exports = {
  addMeeting,
  getMeetingsByParticipantId
};


