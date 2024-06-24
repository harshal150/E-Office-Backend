const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const connection = require("./config/dbconnect");
const taskRoutes = require("./routes/Task/TaskRoutes");
const meetingsRouter = require("./routes/Meetings/MeetingsRoutes");
const meetingMinutesRoutes = require('./routes/Meetings/meetingMinutesRoutes');
const departmentRoutes = require('./routes/Department/departmentRoutes');
const userRoutes =require('./routes/Users/UserRoutes');


const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api", taskRoutes);
app.use('/api', userRoutes);
app.use('/api', departmentRoutes);
app.use("/api/meeting", meetingsRouter);
app.use('/api/meeting-minutes', meetingMinutesRoutes); 

// // connection establishment
// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to MySQL database:", err);
//     process.exit(1);
//   }
//   console.log("Connected to MySQL database");

//   // Start the Express server
//   const server = app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });

//   // Handle unhandled rejections
//   process.on("unhandledRejection", (err) => {
//     console.error("Unhandled Rejection:", err);
//     server.close(() => {
//       process.exit(1);
//     });
//   });

//   // Handle uncaught exceptions
//   process.on("uncaughtException", (err) => {
//     console.error("Uncaught Exception:", err);
//     server.close(() => {
//       process.exit(1);
//     });
//   });
// });

// // Handle MySQL connection errors
// connection.on("error", (err) => {
//   console.error("MySQL connection error:", err);
//   process.exit(1);
// });

const server = app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

module.exports = app;
