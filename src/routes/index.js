const homeRouter = require('./home');
const blogRouter = require('./blog');
const userRouter = require('./user');
const menuRouter = require('./menu');
const contactRouter = require('./contact');
function route(app) {
    app.use('/blog', blogRouter);
    app.use('/user', userRouter);
    app.use('/menu', menuRouter);
    app.use('/contact', contactRouter);
    app.use('/home', homeRouter);
    app.use('/', homeRouter);

}

module.exports = route;
