const express = require ('express');
const router = express.Router();
// const fs = require('fs');
const uuid = require('uuid');
const Gemini = require('../dbgemini.js');

// // Function to read template data
// function readTemplates () {
//     const templatesFile = fs.readFileSync('./data/templates.json');
//     const templatesData = JSON.parse(templatesFile);
//     return templatesData;
// }

// // Function to write template data
// function writeTemplates (data) {
//     fs.writeFileSync('./data/templates.json', JSON.stringify(data));
// }

// Function to get a list of /templates with Mongo
router.get('/templates', async (_req, res) => {
    const getAll = await Gemini.find({})
    console.log(getAll);
    return res.send(getAll);
})

// Function to get a specific /template/:id
router.get('/templates/:id', async (req, res) => {
    // const templateById = templatesData.find((template) => template.id === req.params.id);
    const everything = await Gemini.find({})
    console.log(everything)
    let theOne = {};
    for(const obj of everything ){
        if (obj.templates[0].id === req.params.id) {
            theOne = obj.templates[0]
        }
    }
    return res.send(theOne)
})

// Function to post to /templates with Mongo
router.post("/templates", (req, res) => {
    const data = req.body;
    Gemini.create({
        templates: [{ 
            name: req.body.name,
            id: uuid.v4(),
            exercises: [
                { name: data.exercises[0].name, sets: data.exercises[0].sets },
                { name: data.exercises[1].name, sets: data.exercises[1].sets },
                { name: data.exercises[2].name, sets: data.exercises[2].sets },
                { name: data.exercises[3].name, sets: data.exercises[3].sets },
                { name: data.exercises[4].name, sets: data.exercises[4].sets },
                { name: data.exercises[5].name, sets: data.exercises[5].sets }
            ]
        }]
    });
});

// Function to post to /templates
// router.post('/templates', (req, res) => {
//     const templatesData = readTemplates();
//     const newTemplate = {
//         name: req.body.name,
//         id: uuid.v4(),
//         exercises: req.body.exercises
//     }
//     templatesData.push(newTemplate);
//     writeTemplates(templatesData);
//     return res.json(newTemplate);
// })

module.exports = router;

