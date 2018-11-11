const express = require('express');
const body = require('body-parser');
const path = require('path');
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(body.urlencoded({ extended: false }));
//Static file location /root/public
app.use(express.static(path.join(__dirname, 'public')));

//order mathers 
app.use('/admin', adminRouter);
app.use(shopRouter);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(3000);