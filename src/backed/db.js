// 测试数据库使用的用例
const mysql = require('mysql2')
// 建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'zjj19991118',
    database: 'yxzmzs'
})

// const user = {username: 'yhm', password: '123456yhm', profile: 'YXZ_MZS\\DuckAndMountain\\src\\assets\\profile.png'}
// const sqlInsert = 'SELECT * FROM manager WHERE id=1'
// db.query(sqlInsert, function(error, dataStr){
//     if(error) return console.log(error.message) // 若是失败了就return出该函数了
//     // if(dataStr.affectedRows === 1){console.log('插入数据成功')}
//     console.log(dataStr[0].power)

// })

module.exports = db