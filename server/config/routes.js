const controller = require('../controllers/controller.js');

const path = require("path");

module.exports = function(app) {

    app.get('/products', (req, res) => {
        controller.index(req, res);
    });

    app.post('/products', (req, res) => {
        controller.add_product(req, res);
    });

    app.get('/products/:id', (req, res) => {
        controller.get_product(req, res);
    });

    app.delete('/products/:id', (req, res) => {
        controller.remove_product(req, res);
    });

    app.put('/products/:id/', (req, res) => {
        controller.update_product(req, res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}