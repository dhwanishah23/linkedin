const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    name : {
        type : String,
        require: true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    avatar : {
        type : String
    },
    date : {
        type :Date,
        default: Date.now()
    }
}
)

module.exports = User = mongoose.model("user",userschema) 