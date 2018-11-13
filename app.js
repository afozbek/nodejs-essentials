const path = require('path');

const express = require('express');
<<<<<<< HEAD
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
=======
const body = require('body-parser'); //required middleware for express to get the data from form
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec

const app = express();

app.set('view engine', 'ejs'); //view engine ejs
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
<<<<<<< HEAD
=======
const errorController = require('./controllers/error');
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
=======
//order mathers 
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
<<<<<<< HEAD

=======
>>>>>>> d4946977082be7c509db9a3db3c41d4ce9c7ddec
app.listen(3000);
