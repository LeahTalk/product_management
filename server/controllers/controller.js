const Product = require("../models/models.js");

module.exports = {
    index: function(req, res) {
        Product.find().sort({title: 1})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    add_product: function(req, res) {
        console.log(req.body);
        Product.create(req.body,{runValidators: true})
            .then(data => {
                console.log("I made a object");
                res.json(data)
            }
            )
            .catch(err => {
                console.log("I had an error");
                res.json(err);
            })
    },

    remove_product : function(req, res) {
        Product.remove({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    get_product: function(req, res) {
        Product.findOne({'_id' : req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },

    update_product : function(req, res) {
        Product.update({"_id": req.params.id}, {$set: {
            title: req.body.title,
            price: req.body.price,
            imageURL: req.body.imageURL,
        }},{runValidators: true})
        .then(data => res.json(data))
        .catch(err => {
            res.json(err);
        });  
    }
}