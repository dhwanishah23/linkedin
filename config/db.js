const mongoose = require('mongoose');
const config = require('config');

const db = config.get('mongodbURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex : true
        })
       }
       catch (error){
            console.error(error.message);
            process.exit(1);
       }
   
  

}

module.exports = connectDB;