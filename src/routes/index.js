const homeRouter = require('./home');
const blogRouter = require('./blog');
const userRouter = require('./user');
const menuRouter = require('./menu');
const contactRouter = require('./contact');
const listRouter = require('./listdishes');
const courseRouter = require('./courses');
const searchRouter = require('./search');
const orderRouter = require('./order');
const meRouter = require('./me');
// const router = require('./home');
function route(app) {
    app.use('/me',meRouter);
    app.use('/blog', blogRouter);
    app.use('/user', userRouter);
    app.use('/menu', menuRouter);
    app.use('/courses', courseRouter);
    app.use('/contact', contactRouter);
    app.use('/order', orderRouter);
    app.use('/home', homeRouter);   
    app.use('/search', searchRouter);
    app.use('/listdishes', listRouter);
    app.use('/', homeRouter);

}

module.exports = route;
