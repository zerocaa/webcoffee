class MenuController {


    //[get] new
    menu(req,res) {
        res.render('menu');
    }

}

module.exports = new MenuController;