const express = require('express')
const router = express.Router()

const USER_DATA = require('../models/user')


router.post('/addUser', async (req, res) => {   

    try {
        let item = req.body

            const newUser = new USER_DATA (item) 
            const saveUser = await newUser.save()

            res.send(saveUser)
        } catch (error) {
            console.log(error)
        }
    })

    router.get('/getUser/:id', async (req, res) => {
        try {
    
            let id = req.body.otp
            const getUser = await USER_DATA.findById(id)
            res.send(user)
        } catch (error) {
            console.log(error)
        }
    })




module.exports = router