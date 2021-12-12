const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CourseController {


    //[get] new/editorder/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('course123' + req.params.slug);
            })
            .catch(next)
         }
     // [POST] /courses/store
    // store(req, res, next) {
    //     const formdata = req.body;
    //     const course = new Course(formdata);
    //     course
    //         .save()
    //         .then(() => res.redirect('/editorder/store'))
    //         .catch((error) => { });
    // }
    // // [GET] /courses/:id/edit
    // edit(req, res, next) {
    //     Food.findById(req.params.id)
    //         .then((foods) =>
    //             res.render('editorder/edit', {
    //                 foods: mongooseToObject(foods),
    //             }),
    //         )
    //         .catch(next);
    // }

    // // [PUT] /courses/:id
    // update(req, res, next) {
    //     Food.updateOne({ _id: req.params.id }, req.body)
    //         .then(() => res.redirect('/me/stored/editorder'))
    //         .catch(next);
    // }

    // // [DELETE] /courses/:id
    // destroy(req, res, next) {
    //     Food.delete({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

    // // [DELETE] /courses/:id/force
    // forceDestroy(req, res, next) {
    //     Food.deleteOne({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }

    // // [PATCH] /courses/:id/restore
    // restore(req, res, next) {
    //     Food.restore({ _id: req.params.id })
    //         .then(() => res.redirect('back'))
    //         .catch(next);
    // }
}
module.exports = new CourseController;