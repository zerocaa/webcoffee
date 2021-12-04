class ContactController {


    //[get] new
    index(req,res) {
        res.render('contact');
    }
    //create new contact
    create(req,res) {
        console.log("create");
    }

}

module.exports = new ContactController;