const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin'); //Exports admin router
const shopRoutes = require('./routes/shop');  //Exports shop router

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// app.use((req, res, next) => {
//   User.findById('5beffc272273fe21a43a693f')
//     .then(user => {
//       req.user =
//         new User(user.name, user.email, user.cart, user._id);
//       next();
//     })
//     .catch(err => console.log(err));
// });

app.use('/admin', adminRoutes); //Use the middleware --> /admin/{request} 
app.use(shopRoutes);  //Use the middleware /{request}

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://afozbek:admin@myprojects-ggr2u.mongodb.net/shop?retryWrites=true')
  .then(isConnect => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })