const {Schema, model} = require('mongoose');
const UserSchema = new Schema({
    firstName : {
        type : String
    },
    lastName : {
        type : String
    },
    phone : {
        type : String
    },
    gender : {
        type : String,
        default: null
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('user', UserSchema);