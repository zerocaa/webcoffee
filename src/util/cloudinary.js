const cloudinary = require("cloudinary").v2;
const CLOUDINARY_CLOUD_NAME= 'dalhbpc6z'
const CLOUDINARY_API_KEY= '272333136677179'
const CLOUDINARY_API_SECRET= 'ei9kRB7bgL-Dy0uLTIQY3IL-n8A'
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});


module.exports = cloudinary;
