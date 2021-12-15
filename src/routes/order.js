const express = require('express');
const router = express.Router();
const orderController = require('../app/controllers/OrderController')
const methodOverride = require('method-override');
const Food = require("../app/models/Food");

router.use(express.urlencoded({
  extended: true
}));
router.use(express.json());
router.use(methodOverride('_method'));

router.post('/store', orderController.store);
router.put('/:id', orderController.update);
router.delete('/:id', orderController.destroy);
router.patch('/:id/restore', orderController.restore);
router.delete('/:id/force', orderController.forceDestroy);
router.get('/:id/edit', orderController.edit);

router.get('/', orderController.create);

// router.post('/', async (req, res, next) => {
//   const dataOrder = req.body;
//   // const orderCtr = orderController.instance();
//   // console.log(orderCtr);
//   res.json(dataOrder);
// });


// router.post('/store', orderController.store);
// router.get('/:id/edit', orderController.edit);
// router.put('/:id', orderController.update);
// router.patch('/:id/restore', orderController.restore);
// router.delete('/:id', orderController.destroy);
// router.delete('/:id/force', orderController.forceDestroy);

// router.get('/', orderController.order);

module.exports = router;



// router.post('/', async (req, res, next) => {
//   const orderData = req.body;
//   res.send("!23123")
// })

// router.get("/", async (req, res) => {
//   Food.find({}).lean()
//     .then(foods => res.json(foods))
//     .catch(err => console.log(err));
// });

// router.delete("/:id", async (req, res) => {
//   return new Promise((resolve, reject) => {
//     Food.findByIdAndRemove(id)
//       .then(() => {
//         resolve()
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// });

// router.put("/:id", async (req, res) => {
//   return new Promise((resolve, reject) => {
//     Food.findByIdAndUpdate(id, { new: true })
//       .then(order => {
//         resolve(order.summary())
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// });

// router.get("/:id", async (req, res) => {
//   try {
//     // Find user by id
//     let foods = await Food.findById(req.params.id);
//     res.json(foods);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = router;
