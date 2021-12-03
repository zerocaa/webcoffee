class BlogSingleController {


    //[get] new
    blogsingle(req, res) {
        res.render('blogsingle');
    }

}

module.exports = new BlogSingleController;