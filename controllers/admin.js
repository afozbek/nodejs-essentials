const Product = require('../models/product');

exports.getAddProduct = (request, response, next) => {
    // response.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    response.render('admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false
    });
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const price = req.body.price;
    const product =
        new Product(null, title, imageUrl, description, price);
    product
        .save()
        .then(() => {
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getEditProduct = (request, response, next) => {
    const editMode = request.query.edit;
    if (!editMode) { return response.redirect('/'); }

    const prodId = request.params.productId; //in route -->productId
    Product.findById(prodId, product => {
        if (!product) { return response.redirect('/'); }
        response.render('admin/edit-product', {
            pageTitle: 'Edit Product',
            path: '/admin/edit-product',
            editing: editMode,
            product: product
        });
    });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    const updatedProduct = new Product
        (
        prodId,
        updatedTitle,
        updatedImageUrl,
        updatedDescription,
        updatedPrice
        );
    updatedProduct.save();
    res.redirect('products');
};


exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('admin/product-list', {
            prods: products,
            path: '/admin/products',
            pageTitle: 'Admin Products'
        });
    });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.delete(prodId);
    res.redirect('/');
};