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
    Product.create({
        title: title,
        price: price,
        description: description,
        imageUrl: imageUrl
    })
        .then(result => {
            console.log('Created Product');
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err)
        });
};

exports.getEditProduct = (request, response, next) => {
    //Check if it is in editMode
    const editMode = request.query.edit;
    if (!editMode) {
        return response.redirect('/');
    }

    const prodId = request.params.productId; //in route -->productId
    Product.findById(prodId)
        .then(product => {
            if (!product) { return response.redirect('/'); }
            response.render('admin/edit-product', {
                pageTitle: 'Edit Product',
                path: '/admin/edit-product',
                editing: editMode,
                product: product
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postEditProduct = (req, res, next) => {
    const prodId = req.body.productId;
    const updatedTitle = req.body.title;
    const updatedPrice = req.body.price;
    const updatedImageUrl = req.body.imageUrl;
    const updatedDescription = req.body.description;
    Product.findById(prodId)
        .then(product => {
            product.title = updatedTitle;
            product.price = updatedPrice;
            product.imageUrl = updatedImageUrl;
            product.description = updatedDescription;
            return product.save();
        })
        .then(result => {
            console.log(result);
            res.redirect('/admin/products');
        })
        .catch(err => {
            console.log(err);
            res.render('404');
        });
};


exports.getProducts = (req, res, next) => {
    Product.findAll()
        .then(products => {
            res.render('admin/product-list', {
                prods: products,
                pageTitle: 'Admin Products',
                path: '/admin/products'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    Product.findById(prodId)
        .then(product => {
            return product.destroy();
        })
        .then(result => {
            console.log('DESTROYED PRODUCT!');
            res.redirect('/');
        })
        .catch(err => {
            console.log(err);
        });
};