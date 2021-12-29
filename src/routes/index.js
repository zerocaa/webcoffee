const homeRouter = require('./home');
const blogRouter = require('./blog');
const userRouter = require('./user');
const menuRouter = require('./menu');
const contactRouter = require('./contact');
const listRouter = require('./listdishes');
const searchRouter = require('./search');
const breakfastRouter = require('./breakfast')
const lunchRouter = require('./lunch');
const dinnerRouter = require('./dinner');
const dessertRouter = require('./dessert');
const drinkRouter = require('./drink');
const winecardRouter = require('./winecard');
const orderRouter = require('./order');
const meRouter = require('./me');
const adminRouter = require('./admin');
// const router = require('./home');
function route(app) {
    app.use('/dessert', dessertRouter);
    app.use('/drink', drinkRouter);
    app.use('/winecard',winecardRouter);
    app.use('/dinner', dinnerRouter);
    app.use('/lunch', lunchRouter);
    app.use('/breakfast', breakfastRouter);
    app.use('/me',meRouter);
    app.use('/blog', blogRouter);
    app.use('/user', userRouter);
    app.use('/menu', menuRouter);
    app.use('/contact', contactRouter);
    app.use('/order', orderRouter);
    app.use('/home', homeRouter);   
    app.use('/search', searchRouter);
    app.use('/listdishes', listRouter);
    app.use('/admin', adminRouter);
    app.use('/', homeRouter);

}

module.exports = route;
