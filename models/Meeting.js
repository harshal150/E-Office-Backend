// const { createConnection } = require("../config/dbconnect");

// class Meeting {
//   constructor(title, date, createdBy, participants, googleMeetLink) {
//     this.title = title;
//     this.date = date;
//     this.createdBy = createdBy;
//     this.participants = participants;
//     this.googleMeetLink = googleMeetLink;
//   }

//   async save() {
//     const connection = await createConnection();
//     try {
//       const query = `
//         INSERT INTO Meetings (title, date, created_by, participants, google_meet_link)
//         VALUES (?, ?, ?, ?, ?)
//       `;
//       const [result] = await connection.execute(query, [
//         this.title,
//         this.date,
//         this.createdBy,
//         this.participants.join(","),
//         this.googleMeetLink,
//       ]);
//       return result.insertId;
//     } catch (error) {
//       throw new Error(`Error saving meeting: ${error.message}`);
//     } finally {
//       await connection.end();
//     }
//   }

//   static async getMeetingsByParticipantId(participantId, limit, offset) {
//     const connection = await createConnection();

//     try {
//       if (!participantId) {
//         throw new Error("Participant ID is required");
//       }

//       const query = `
//   SELECT title FROM Meetings 
//   WHERE participants LIKE ?
//          OR participants LIKE ?
//          OR participants LIKE ?
//          OR participants = ?
// `;
//       const [results] = await connection.execute(query, [
//         `%,${participantId},%`,
//         `${participantId},%`,
//         `%,${participantId}`,
//         participantId,
//       ]);
//       console.log(results);
//       return results;
//     } catch (error) {
//       console.log(error);
//       throw new Error(`Error fetching meetings: ${error.message}`);
//     } finally {
//       await connection.end();
//     }
//   }
// }

// module.exports = Meeting;


// models/Meeting.js
const { createConnection } = require("../config/dbconnect");

class Meeting {
  constructor(title, date, createdBy, participants, googleMeetLink) {
    this.title = title;
    this.date = date;
    this.createdBy = createdBy;
    this.participants = participants;
    this.googleMeetLink = googleMeetLink;
  }

  async save() {
    const connection = await createConnection();
    try {
      const query = `
        INSERT INTO Meetings (title, date, created_by, participants, google_meet_link)
        VALUES (?, ?, ?, ?, ?)
      `;
      const [result] = await connection.execute(query, [
        this.title,
        this.date,
        this.createdBy,
        this.participants.join(","),
        this.googleMeetLink,
      ]);
      return result.insertId;
    } catch (error) {
      throw new Error(`Error saving meeting: ${error.message}`);
    } finally {
      await connection.end();
    }
  }

  static async getMeetingsByParticipantId(participantId, limit, offset) {
    const connection = await createConnection();

    try {
      if (!participantId) {
        throw new Error("Participant ID is required");
      }

      const query = `
        SELECT * FROM Meetings 
        WHERE participants LIKE ?
           OR participants LIKE ?
           OR participants LIKE ?
           OR participants = ?
        LIMIT ? OFFSET ?
      `;
      const [results] = await connection.execute(query, [
        `%,${participantId},%`,
        `${participantId},%`,
        `%,${participantId}`,
        participantId,
        parseInt(limit, 10),
        parseInt(offset, 10)
      ]);
      return results;
    } catch (error) {
      console.log(error);
      throw new Error(`Error fetching meetings: ${error.message}`);
    } finally {
      await connection.end();
    }
  }
}

module.exports = Meeting;
