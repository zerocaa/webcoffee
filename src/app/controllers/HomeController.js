const Food = require('../models/Food');
class HomeController {


    //[get] new
    home(req,res,next) {
        Food.find({}, (err, foods) => {
            if (!err){
            res.render('home')
        }   else {
            res.status(400).json({err:"error"});
        }
    });
    }
}
module.exports = new HomeController;