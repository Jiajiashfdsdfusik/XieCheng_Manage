const db = require('../db')

const rejectData = async (req, res) => {
    let travelid = req.body.travelID
    const state = req.body.state
    const sqlUpdata = 'UPDATE travel SET state=? WHERE id=?'
    db.query(sqlUpdata, [state, travelid], function (error, dataStr){
        if(error) return console.log(error.message)
        if(dataStr.affectedRows === 1){
            console.log('审核成功')
            res.send({access: '审核成功'})
        }
    })
}

module.exports = rejectData