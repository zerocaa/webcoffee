const router = require("express").Router();
const cloudinary = require("../config/db/cloudinary");
const upload = require("../util/multer");
const Food = require("../app/models/Food");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create new usere
    let foods = new Food({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    // Save user
    await foods.save();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Find user by id
    let foods = await Food.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(foods.cloudinary_id);
    // Delete user from db
    await foods.remove();
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    let foods = await Food.findById(req.params.id);
    // Delete image from cloudinary
    await cloudinary.uploader.destroy(foods.cloudinary_id);
    // Upload image to cloudinary
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(req.file.path);
    }
    const data = {
      name: req.body.name || foods.name,
      avatar: result?.secure_url || foods.avatar,
      cloudinary_id: result?.public_id || foods.cloudinary_id,
    };
    foods = await Food.findByIdAndUpdate(req.params.id, data, { new: true });
    res.json(foods);
  } catch (err) {
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find user by id
    let foods = await Food.findById(req.params.id);
    res.json(foods);
  } catch (err) {
    console.log("loi da xay ra");
  }
});

module.exports = router;
