const db = require('../db')

const delData = async (req, res) => {
    let travelid = req.body.travelID
    const sqlUpdata = 'UPDATE travel SET deleteOr=1 WHERE id=?'
    db.query(sqlUpdata, travelid, function (error, dataStr){
        if(error) return console.log(error.message)
        if(dataStr.affectedRows === 1){res.send({access: '删除成功'})}
    })
}

module.exports = delData