const express = require ('express');
const router = express.Router();
const fs = require('fs');
const uuid = require('uuid');

// Function to read template data
function readTemplates () {
    const templatesFile = fs.readFileSync('./data/templates.json');
    const templatesData = JSON.parse(templatesFile);
    return templatesData;
}

// Function to write template data
function writeTemplates (data) {
    fs.writeFileSync('./data/templates.json', JSON.stringify(data));
}

// Function to get /templates route
router.get('/templates', (_req, res) => {
    const templatesData = readTemplates();
    return res.send(templatesData);
})

// Function to post to /templates
router.post('/templates', (req, res) => {
    const templatesData = readTemplates();
    const newTemplate = [
        {
        name: req.body.name,
        exercises: [
            {exercise1: req.body.exercises.exercise1, sets1: req.body.exercises.sets1}, 
            {exercise2: req.body.exercises.exercise2, sets2: req.body.exercises.sets2}, 
            {exercise3: req.body.exercises.exercise3, sets3: req.body.exercises.sets3}, 
            {exercise4: req.body.exercises.exercise4, sets4: req.body.exercises.sets4},
            {exercise5: req.body.exercises.exercise5, sets5: req.body.exercises.sets5}, 
            {exercise6: req.body.exercises.exercise6, sets6: req.body.exercises.sets6},
        ]
        }
    ]
    templatesData.push(newTemplate);
    writeTemplates(templatesData);
    return res.json(newTemplate);
})

module.exports = router;