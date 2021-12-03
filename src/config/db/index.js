const mongoose = require('mongoose');
 

const URL = 'mongodb+srv://hung:hung@cluster0.rrje9.mongodb.net/test?retryWrites=true'

const connectDB = async () => {
  try {
    await mongoose.connect(
      URL,
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )

    console.log('Connected to mongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
module.exports = {connectDB};