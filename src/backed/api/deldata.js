const db = require('../db')

const delData = async (req, res) => {
    let deldata = req.body.travelID
    const sqlUpdata = 'UPDATE travel SET del=1 WHERE id=?'
    db.query(sqlUpdata, deldata, function (error, dataStr){
        if(error) return console.log(error.message)
        if(dataStr.affectedRows === 1){res.send({access: '删除成功'})}
    })
}

module.exports = delData