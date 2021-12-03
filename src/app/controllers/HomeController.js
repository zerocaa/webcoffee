class HomeController {


    //[get] new
    home(req,res) {
        res.render('home');
    }

}

module.exports = new HomeController;