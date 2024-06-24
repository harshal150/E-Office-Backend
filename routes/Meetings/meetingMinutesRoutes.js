// routes/meetingMinutesRoutes.js
const express = require('express');
const router = express.Router();
const meetingMinutesController = require('../../controllers/Meetings/MeetingMinutesController');

router.post('/add-minutes', meetingMinutesController.addMeetingMinutes);

module.exports = router;
