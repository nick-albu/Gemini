const express = require ('express');
const router = express.Router();
const uuid = require('uuid');
const Gemini = require('../dbgemini.js');


// Function to get a list of /templates with Mongo
router.get('/templates', async (_req, res) => {
    const everything = await Gemini.find({})
    let theTemplates = [];
    for(const obj of everything ) {
        if (obj.templates[0]) {
            theTemplates.push(obj.templates[0])
        }
    }
    return res.send(theTemplates);
})

// Function to get a specific /template/:id with Mongo
router.get('/templates/:id', async (req, res) => {
    const everything = await Gemini.find({})
    console.log(everything)
    let theOne = {};
    for(const obj of everything ) {
        if (obj.templates[0]) {
            if (obj.templates[0].id === req.params.id) {
            theOne = obj.templates[0]
        }}
    }
    return res.send(theOne)
})

// Function to post to /templates with MongoDB
router.post("/templates", (req, res) => {
    const data = req.body
    console.log(req.body)
    Gemini.create({
        templates: [{ 
            name: req.body.name,
            id: uuid.v4(),
            exercises: req.body.exercises
        }]
    });
    return res.send('Posted new template')
});

module.exports = router;

