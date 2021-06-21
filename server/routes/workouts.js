const express = require ('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');

// Function to read workout data
function readWorkouts () {
    const workoutsFile = fs.readFileSync('./data/workouts.json');
    const workoutsData = JSON.parse(workoutsFile);
    return workoutsData;
}

// Function to write workout data
function writeWorkouts (data) {
    fs.writeFileSync('./data/workouts.json', JSON.stringify(data));
}

// Function to get /workouts route
router.get('/workouts', (_req, res) => {
    const workoutsData = readWorkouts();
    return res.send(workoutsData);
})

// Function to post to /workouts
router.post('/workouts', (req, res) => {
    const workoutsData = readWorkouts();
    const newWorkout = {
        name: req.body.name,
        id: uuid.v4(),
        date: Date.now(),
        exercises: req.body.exercises
    }
    workoutsData.push(newWorkout);
    writeWorkouts(workoutsData);
    return res.json(newWorkout);
})


module.exports = router;