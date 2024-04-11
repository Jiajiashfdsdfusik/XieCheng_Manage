const db = require('../db')

const searchManager = (req, res) => {
    const username = req.body.name
    const password = req.body.password
    const sqlSearch = 'SELECT * FROM manager WHERE username=?'
    db.query(sqlSearch,username, function(error, dataStr){
        if(error) return console.log(error.message) // 若是失败了就return出该函数了
        if(dataStr.length>0){
            if(username === dataStr[0].username && password === dataStr[0].password){
                return res.send({
                    login: 'login',
                    name: dataStr[0].username,
                    power: dataStr[0].power,
                    error: '',
                })
            }else{
                return res.send({
                    login: 'offlogin',
                    error: '密码错误',
                })
            }
        }else{
            return res.send({
                login: 'offlogin',
                error: '用户不存在',
            })
        }
    })
}

module.exports = searchManager