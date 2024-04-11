const express = require('express')
const router = express.Router()
const login = require('./api/login')
const register = require('./api/register')
const searchManager = require('./api/loadall')
const delData = require('./api/deldata')
const agreeData = require('./api/agree')
const rejectData = require('./api/reject')


router.get('/', (req, res)=>{
    res.send({name: 'zs', age:20})
})

router.post('/login', login)
router.post('/register', register)
router.post('/loadall', searchManager)
router.post('/deldata', delData)
router.post('/agree', agreeData)
router.post('/reject', rejectData)

module.exports = router