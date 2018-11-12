const Product = require('../models/product');

exports.getAddProduct = (request, response, next) => {
    // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (request, response, next) => {
    //View Model
    Product.fetchAll((products) => {
        response.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
        });
    });
};