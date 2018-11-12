const path = require('path');

const express = require('express');
const body = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: '__layout',
    extname: 'hbs'
})
);
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(body.urlencoded({ extended: false }));
//Static file location /root/public
app.use(express.static(path.join(__dirname, 'public')));

//order mathers 
app.use('/admin', adminData.routes);
app.use(shopRouter);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: '404' });
});
app.listen(3000);