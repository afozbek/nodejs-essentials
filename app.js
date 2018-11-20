const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin'); //Exports admin router
const shopRoutes = require('./routes/shop');  //Exports shop router

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('5bf4447b0a55062988f90da6,')
    .then(user => {
      req.user = user
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes); //Use the middleware --> /admin/{request} 
app.use(shopRoutes);  //Use the middleware /{request}

app.use(errorController.get404);

mongoose
  .connect('mongodb+srv://afozbek:admin@myprojects-ggr2u.mongodb.net/shop?retryWrites=true')
  .then(isConnect => {
    User.findOne()
      .then(user => {
        if (!user) {
          const user = new User({
            name: "Furkan Özbek",
            email: "afozbek@test.com",
            cart: []
          });
          user.save();
          console.log(user);
        }
      });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })