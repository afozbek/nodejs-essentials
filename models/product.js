const fs = require('fs');
const path = require('path');
//products yok şu an
const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = (cb) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]); // empty Array returned 
        }
        else
            cb(JSON.parse(fileContent)); // array returned
    });
}
<<<<<<< HEAD
//Our Base Class
module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
=======

module.exports = class Product {
    constructor(title) {
        this.title = title;
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec
    }


    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}