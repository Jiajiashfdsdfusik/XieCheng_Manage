const db = require('../db')

const agreeData = async (req, res) => {
    let travelid = req.body.travelID
    const state = '1'
    const sqlUpdata = 'UPDATE travel SET state=? WHERE id=?'
    db.query(sqlUpdata, [state, travelid], function (error, dataStr){
        if(error) return console.log(error.message)
        if(dataStr.affectedRows === 1){res.send({access: '通过成功'})}
    })
}

module.exports = agreeData