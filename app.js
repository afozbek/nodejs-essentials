const path = require('path');

const express = require('express');
const body = require('body-parser'); //required middleware for express to get the data from form

const app = express();

app.set('view engine', 'ejs'); //view engine ejs
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(body.urlencoded({ extended: false }));
//Static file location /root/public
app.use(express.static(path.join(__dirname, 'public')));

//order mathers 
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);
