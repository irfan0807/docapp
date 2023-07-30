const mongoose = require('mongoose');
const colors = require('colors');


const connectDB = async () => {

  try {

    const con = await mongoose.connect(process.env.MONGODB);
    if (con) {
      console.log(`DB connected Successfully ${mongoose.connection.host}`.bgGreen.white);
    }


  } catch (error) {
    console.log(`mongodb Server Issue ${error}`.bgRed.white)

  }

}

module.exports = connectDB;