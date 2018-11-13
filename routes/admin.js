<<<<<<< HEAD
const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/products', adminController.getProducts);

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);


// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
=======
const express = require('express');

const path = require('path');

const productsController = require('../controllers/products');

const router = express.Router();

// /admin/add-product ==>GET
router.get('/add-product', productsController.getAddProduct);

// /admin/add-product ==>POST
router.post('/add-product', productsController.postAddProduct);

module.exports = router;
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec
