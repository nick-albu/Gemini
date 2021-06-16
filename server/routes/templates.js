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
    const newTemplate = {
        name: req.body.name,
        exercises: [
            {name: req.body.exercises[0], sets: req.body.exercises[1]}, 
            {name: req.body.exercises[1], sets: req.body.exercises[1]}, 
            {name: req.body.exercises[2], sets: req.body.exercises[1]}, 
            {name: req.body.exercises[3], sets: req.body.exercises[1]},
            {name: req.body.exercises[4], sets: req.body.exercises[1]}, 
            {name: req.body.exercises[5], sets: req.body.exercises[1]},
        ]
    }
    console.log(req.body);
    templatesData.push(newTemplate);
    writeTemplates(templatesData);
    return res.json(newTemplate);
})

module.exports = router;

