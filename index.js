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

server.get('/actions', (req, res) => {
    database.getActions()
    .then(action => {
        res.status(200).json(action)
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
    const {notes, description} = req.body;
    const projectId = req.body.project_id;
    const actionInfo = req.body;
    if (!notes || !description || !projectId) {
        res.status(400).json({
            errorMessage: 'Please provide notes and description of action, as well as project id'
        })
    }
    else {
        database.addAction(actionInfo)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({
                error: 'There was an error adding your action to the db'
            })
        })
    }
});

server.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    database.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: 'unable to retrieve list of projects actions'
        })
    })
});

server.delete('/projects/:id', (req, res) => {
    const id = req.params.id;
    database.remove(id)
    .then(deleted => {
        if (deleted) {
            res.status(204).end();
        }
        else {
            res.status(404).json({
                errorMessage: "The project with the specified ID does not exist."
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: "the project could not be deleted"
        })
    })
});


const port = process.env.PORT || 4000;

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)






