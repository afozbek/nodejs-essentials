const express = require('express');
const body = require('body-parser');
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(body.urlencoded({ extended: false }));

//order mathers 
app.use(adminRouter);
app.use(shopRouter);

app.listen(3000);