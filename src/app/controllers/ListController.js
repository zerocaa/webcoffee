const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class ListController {


    //[get] new
    //show menu
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('listdishes/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next)
    }
    //find food     

}

module.exports = new ListController;