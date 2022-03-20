const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5005;

//יצירת השרת
const server = express();

//אפשרות לקבל ג׳ייסון בגוף הבקשה
server.use(express.json());

server.get(`/`, async (req, res)=>{
    res.send(`welcome to routes`);
});


server.use(`/api/stores`,require(`./Routes/stores`));


server.listen(PORT, ()=>{console.log(`http://localhost:${PORT}`)})