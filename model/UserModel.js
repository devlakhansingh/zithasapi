const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please enter name"]
    },

    email: {
        type: String,
        required: [true, "please enter name"]
    },

}, {
    timestamps: true
})

module.exports = mongoose.model("ZithasUser", UserSchema)