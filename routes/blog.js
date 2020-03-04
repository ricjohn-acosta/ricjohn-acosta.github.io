const express = require('express')
const router = express.Router()

router.get('/blog', (req,res) => {
    res.send('hello')
})
module.exports = router