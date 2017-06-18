var express = require('express');
var router = express.Router();

var ProductsService = require('../services/productsService');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var products = ProductsService.getAll();
    res.render('products/list', { products });
});

router.get('/:id', function (req, res, next) {
    var product = ProductsService.getById(req.params.id);

    // 404 if no product found
    if (!product) {
        next();
        return;
    }

    res.render('index', { product });
});

module.exports = router;
