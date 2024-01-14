const ZithasUser = require("../model/UserModel")


const getuser = async (req, res) => {

    const zuser = await ZithasUser.find()
    if (!zuser) {
        res.Status(401)
        res.json("user not found")
    }



    res.send(zuser)


}


const createuser = async (req, res) => {

    const { name, email } = req.body

    if (!name || !email) {
        res.Status(401).json({
            message: "please fill all details"
        })
    }

    const userexits = await ZithasUser.findOne({ email })

    if (userexits) {

        res.json({
            message: "user already exits"
        })
    }

    const createuser = await ZithasUser.create({
        name,
        email
    })

    res.send(createuser)


}




module.exports = { getuser, createuser }