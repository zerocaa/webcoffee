class BlogController {


    //[get] new
    blog(req,res) {
        res.render('blog');
    }

}

module.exports = new BlogController;