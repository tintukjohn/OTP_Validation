const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: { type: String, required: true },
    message: { type: String, required: true },
    otp: { type: Number, required: true }
})


let UserData = mongoose.model('user',UserSchema)

module.exports = UserData