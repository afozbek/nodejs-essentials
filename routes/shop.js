const path = require('path');

const express = require('express');

<<<<<<< HEAD
const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);
=======
const productController = require('../controllers/products');

const router = express.Router();

router.get('/', productController.getProducts);

module.exports = router;
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
