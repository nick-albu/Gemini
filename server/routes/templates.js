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

// Function to get a list of /templates
router.get('/templates', (_req, res) => {
    const templatesData = readTemplates();
    return res.send(templatesData);
})

// Function to get a specific /template/:id
router.get('/templates/:id',(req, res) => {
    const templatesData = readTemplates();
    const templateById = templatesData.find((template) => template.id === req.params.id);
    if (templateById) {
        return res.json(templateById);
    } else {
        return res.status(404).send(`Workout template not found at id${req.params.id}`)
    }
})

// Function to post to /templates
router.post('/templates', (req, res) => {
    const templatesData = readTemplates();
    const newTemplate = {
        name: req.body.name,
        id: uuid.v4(),
        exercises: req.body.exercises
    }
    templatesData.push(newTemplate);
    writeTemplates(templatesData);
    return res.json(newTemplate);
})

module.exports = router;

