const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product ==>GET
router.get('/add-product', (request, response, next) => {
    // response.send('<form action="/admin/add-product" method="POST">' +
    //     '<input type="text" name="title">'
    //     + '<button type="submit">Add Product</button></form>');
    response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product ==>POST
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;