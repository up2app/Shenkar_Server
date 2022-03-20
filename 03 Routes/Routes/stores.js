//מייצר את האובייקט של הראוטר
const StoresRouter = require('express').Router()
const fs = require('fs');

StoresRouter.post(`/add`, async (req, res) => {
    try {
        let { name, address, products } = req.body;
        let storeToAdd = { name, address, products };
        let content = await fs.readFileSync(`./db/stores.json`);
        let stores = [...JSON.parse(content)];
        storeToAdd.id = stores.length + 1;
        stores.push(storeToAdd);
        await fs.writeFileSync(`./db/stores.json`, JSON.stringify(stores));
        res.status(200).json({ msg: 'Store added successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

StoresRouter.delete(`/:id`, async (req, res) => {
    let { id } = req.params;
    let content = await fs.readFileSync(`./db/stores.json`);
    let stores = [...JSON.parse(content)];
    let storesToWrite = stores.filter(store=> store.id !== parseInt(id));
    await fs.writeFileSync(`./db/stores.json`, JSON.stringify(storesToWrite));
    res.status(200).json({ msg: 'Store deleted successfully' });
});

StoresRouter.get(`/`, async (req, res) => {
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

StoresRouter.get(`/:id`, async (req, res) => {
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

StoresRouter.get(`/:id/:pid`, async (req, res) => {
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






//ייצוא הראוטר של החנויות לשימוש בקובץ הראשי
module.exports = StoresRouter;