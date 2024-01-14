const mongoose = require("mongoose")

const dbconnection = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    try {
        console.log("databse connection")
    } catch (error) {
        console.log(error)
    }
}

module.exports = dbconnection