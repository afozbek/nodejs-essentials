const path = require('path');

const express = require('express');
const { body } = require('express-validator/check');


const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', isAuth, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', isAuth, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', [
    body('title').isString().isLength({ min: 3 }).trim(),
<<<<<<< HEAD
    body('price').isFloat(),
    body('description').isString().trim().isLength({ min: 3 })
=======
    body('imageUrl').isURL(),
    body('price').isFloat(),
    body('description').isString().trim().isLength({ min: 10 }).trim()

>>>>>>> 12cfb3de1162289eb0a0c271fc57e7a0fb908bf6
], isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', [
    body('title').isString().isLength({ min: 3 }).trim(),
<<<<<<< HEAD
=======
    body('imageUrl').isURL(),
>>>>>>> 12cfb3de1162289eb0a0c271fc57e7a0fb908bf6
    body('price').isFloat(),
    body('description').isString().trim().isLength({ min: 10 }).trim()

], isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

module.exports = router;
