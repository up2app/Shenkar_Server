require('dotenv').config();
const express = require('express');
const path = require('path');

const PORT = process.env.KUKU;

//create the server instance
const server = express();

//use static files
server.use(express.static(path.join(__dirname, 'build')));

//send a file
server.get(`/`, async (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.get(`/api/users/:id`, async (req, res) => {
    let { id } = req.params;
    if (id == 2)
        res.status(200).json({ name: 'kuku', id: 2 });
    else
        res.status(404).send('user not found');
});


server.listen(PORT, () => { console.log(`listening: http://localhost:${PORT}`) })
