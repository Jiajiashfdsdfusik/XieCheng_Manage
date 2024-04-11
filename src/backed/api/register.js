const db = require('../db')

const searchManager = (req, res) => {
    const username = req.body.name
    const password = req.body.password
    const power = req.body.power
    let checked = true
    const sqlInsert = 'INSERT INTO manager (username, password, power) VALUES (?, ?, ?)'
    const sqlSearch = 'SELECT * FROM manager WHERE username=?'
    // 搜索是否有重复用户名
    db.query(sqlSearch, username, function(error, dataStr){
        if(error) return console.log(error.message) // 若是失败了就return出该函数了
        console.log(dataStr)
        if(dataStr.length === 0){
            db.query(sqlInsert, [username, password, power], function(error, dataStr){
                if(error) return res.send({
                    success: 'failed',
                    error: '注册失败',
                }) // 若是失败了就return出该函数了
                if(dataStr.affectedRows === 1){
                    console.log('插入数据成功')
                    res.send({
                        success: 'success',
                    })
                }
            })
        }else{
            res.send({
                success: 'failed',
                error: '用户名已存在',
            })
        }
    })
    // if(checked){
    //     db.query(sqlInsert, [username, password, power], function(error, dataStr){
    //         if(error) return res.send({
    //             success: 'failed',
    //             error: '注册失败',
    //         }) // 若是失败了就return出该函数了
    //         if(dataStr.affectedRows === 1){
    //             console.log('插入数据成功')
    //             res.send({
    //                 success: 'success',
    //             })
    //         }
    //     })
    // }else{
    //     res.send({
    //         success: 'failed',
    //         error: '用户名已存在',
    //     })
    // }

}

module.exports = searchManager