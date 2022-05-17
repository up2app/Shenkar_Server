const express = require('express');
const multer = require('multer');
const path = require('path');
const PORT = 5005;

//storage settings
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + `.${file.mimetype.split('/')[1]}`)
    }
})

//upload function
const upload = multer({ storage: storage });

const server = express();
server.use(express.json());
server.use('/uploads', express.static(path.join(__dirname,'uploads')));

server.post(`/upload`, upload.single('photo'), async (req, res) => {
    let fileUrl = `http://localhost:${PORT}/${req.file.path}`
    res.status(201).json({ url: fileUrl });
});

server.listen(PORT, () => console.log(`listening: http://localhost:${PORT}`));
