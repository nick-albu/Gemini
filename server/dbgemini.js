const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
    templates: [{ 
        name: String,
        id: String,
        exercises: [{ name: String, sets: String}]
    }],
    workouts: [{
        name: String,
        id: String,
        date: Number,
        exercises: [{
            name: String,
            sets: [{ weight: String, reps: String }]
        }]
    }]
    },
);

const model =  mongoose.model("Gemini", appSchema);
module.exports = model;