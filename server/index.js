const express = require("express");
const app = express();
const cors = require("cors");
const templates = require("./routes/templates");
const workouts = require("./routes/workouts");
const mongoose = require ('mongoose');
const connection_url = "mongodb+srv://Admin:Summer.2021@gemini-cluster.kvhoy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


// Configuration
require("dotenv").config();
const port = process.env.PORT || 8080;

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use((_req, _res, next)=>{
    console.log("Incoming request");
    next();
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('', workouts);
app.use('', templates);


// Server Start
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

