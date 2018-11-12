const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (request, response, next) => {
    //View Model
    const products = adminData.products;
    response.render('shop', { ürünler: products, docTitle: 'Furkan Özbek' });
});
module.exports = router;




