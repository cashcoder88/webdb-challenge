const express = require('express')
const server = express();
server.use(express.json());


const database = require('./db-model');

server.post('/projects', (req, res) => {
    
});

server.post('/actions', (req, res) => {
    
});

server.get('/projects/:id', (req, res) => {
    
});

const port = process.env.PORT || 4000;

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)






