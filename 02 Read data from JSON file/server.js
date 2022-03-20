//ייבוא ספריות
const fs = require('fs');
const express = require('express');

//הגדרת הפורט
const PORT = 8001;

//יצירת השרת
const server = express();

server.get(`/api/stores/`, async (req,res)=>{ 
    try {
        let file = await fs.readFileSync(`./db/stores.json`);
        if (file) {
            let data = JSON.parse(file);
            res.status(200).json(data);
        }
        else
            res.status(404).json({ msg: 'file not found' });
    } catch (error) {
        res.status(500).send(error);
    }
});

server.get(`/api/stores/:id`, async (req, res) => {
    try {
        let { id } = req.params;
        let file = await fs.readFileSync(`./db/stores.json`);
        if (file) {
            let data = JSON.parse(file);
            let storeToSend = data.find(store => store.id === parseInt(id));
            if (storeToSend)
                res.status(200).json(storeToSend);
            else
                res.status(404).json({ msg: 'store not found' });
        }
        else
            res.status(404).json({ msg: 'file not found' });
    } catch (error) {
        res.status(500).send(error);
    }
});

server.get(`/api/stores/:id/:pid`, async (req, res) => {
    try {
        let { id, pid } = req.params;
        let file = await fs.readFileSync(`./db/stores.json`);
        if (file) {
            let data = JSON.parse(file);
            let storeToSearch = data.find(store => store.id === parseInt(id));
            if (storeToSearch) {
                let productToSend = storeToSearch.products.find(product => product.pId === parseInt(pid))
                if (productToSend)
                    res.status(200).json(productToSend);
                else
                    res.status(404).json({ msg: 'product not found' });
            }
            else
                res.status(404).json({ msg: 'store not found' });
        }
        else
            res.status(404).json({ msg: 'file not found' });
    } catch (error) {
        res.status(500).send(error);
    }
});


server.listen(PORT, () => { console.log(`http://localhost:${PORT}/api/stores`) });
