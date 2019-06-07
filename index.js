const express = require('express')
const server = express();
server.use(express.json());


const port = process.env.PORT || 4000;

server.listen(port, () => 
    console.log(`Server is up and running on port http://localhost:${port}`)
)





// const express = require('express');

// const server = express();

// server.use(express.json());


// const port = process.env.PORT || 3000;

// server.listen(port, () => 
//     console.log(`Server is up and running on port http://localhost:${port}`)
// )
