
// routes/meetingRoutes.js
const express = require('express');
const router = express.Router();
const meetingsController = require('../../controllers/Meetings/MeetingsController');

router.post('/addMeeting', meetingsController.addMeeting);
router.get('/meetings-by-participant', meetingsController.getMeetingsByParticipantId);

module.exports = router;
