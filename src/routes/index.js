const homeRouter = require('./home');
const blogRouter = require('./blog');
const blogSRouter = require('./blogsingle');
const menuRouter = require('./menu');
const reservation = require('./reservation');
function route(app) {
    app.use('/blog', blogRouter);
    app.use('/blogsingle', blogSRouter);
    app.use('/menu', menuRouter);
    app.use('/reservation', reservation);
    app.use('/home', homeRouter);

}

module.exports = route;
