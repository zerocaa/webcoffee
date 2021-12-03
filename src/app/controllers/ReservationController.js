class ReservationController {


    //[get] new
    reservation(req,res) {
        res.render('reservation');
    }

}

module.exports = new ReservationController;