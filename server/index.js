const express = require("express");
const app = express();
const cors = require("cors");
const templates = require("./routes/templates");
const workouts = require("./routes/workouts");

// Configuration
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use((_req, _res, next)=>{
    console.log("Incoming request");
    next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/templates", templates);
app.use("/workouts", workouts);

// Server Start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
