


// models/MeetingMinutes.js
const {createConnection} = require('../config/dbconnect');

class MeetingMinutes {
  constructor(meetingId, userId, minutes, createdAt) {
    this.meetingId = meetingId;
    this.userId = userId;
    this.minutes = minutes;
    this.createdAt = createdAt;
  }

  async save() {
    const connection = await createConnection();
    try {
      const query = `
        INSERT INTO MeetingMinutes (meeting_id, user_id, minutes, created_at)
        VALUES (?, ?, ?, ?)
      `;
      const result = await connection.execute(query, [
        this.meetingId,
        this.userId,
        this.minutes,
        this.createdAt
      ]);
      return result.insertId; 
    } catch (error) {
      console.error(error);
      throw new Error(`Error saving meeting minutes: ${error.message}`);
    }
    finally {
      await connection.end();
    }
  }
}

module.exports = MeetingMinutes;
