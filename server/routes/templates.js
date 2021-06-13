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
function writeTemplates () {
    fs.writeFileSync('./data/templates.json', JSON.stringify(data));
}

// Function to get /templates route
router.get('/templates', (_req, res) => {
    const templatesData = readTemplates();
    return res.send(templatesData);
})

module.exports = router;