const express = require ('express');
const router = express.Router();
// const fs = require('fs');
const uuid = require('uuid');
const Gemini = require('../dbgemini.js');

// Function to get /workouts route with MongoDB
router.get('/workouts', async (_req, res) => {
    const everything = await Gemini.find({})
    let theWorkouts = [];
    for(const obj of everything ) {
        if (obj.workouts[0]) {
            theWorkouts.push(obj.workouts[0])
        }
    }
    return res.send(theWorkouts);
})

// Function to post to /workouts
router.post('/workouts', async (req, res) => {
    const data = req.body
    console.log(data)
    const newWorkout = await Gemini.create({
        workouts: [{ 
            name: data.name,
            id: uuid.v4(),
            date: Date.now(),
            exercises: req.body.exercises
        }]
    });
    return res.send(newWorkout)
})

module.exports = router;