const express = require('express')
const server = express();

server.use(express.json());


const database = require('./db-model');

server.get('/projects', (req, res) => {
    database.getProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({
            error: 'could not retrieve projects'
        })
    })
});


server.post('/projects', (req, res) => {
    const {name, description} = req.body;
    const projectInfo = req.body;
    if (!name || !description ) {
        res.status(400).json({
            errorMessage: 'Please provide name and description of project'
        })
    }
    else {
        database.addProject(projectInfo)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            res.status(500).json({
                error: 'There was an error adding project to DB'
            })
        })
    }
});

server.post('/actions', (req, res) => {
    
});

server.get('/projects/:id', (req, res) => {
    
});

const port = process.env.PORT || 4000;

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)






