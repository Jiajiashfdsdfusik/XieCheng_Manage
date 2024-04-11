const db = require('../db')

const searchManager = async (req, res) => {
    let travels = []
    let datas = []
    try {
        // 搜索所有未被物理删除的游记
        const sqlSearch = 'SELECT * FROM travel WHERE deleteOr=0'
        travels = await new Promise((resolve, reject) => {
          db.query(sqlSearch, function (error, dataStr) {
            if (error) {
              reject(error.message)
            } else {
              resolve(dataStr)
            }
          })
        })
      } catch (error) {
        console.log(error)
      }
    // 整理最终返回的数据形式
    for(let i=0; i<travels.length; i++){
        datas.push({
            travelID: travels[i].id,
            title: travels[i].title,
            content: travels[i].content,
            state: travels[i].state,
            open: travels[i].open,
            delete: travels[i].del,
            userID: travels[i].use_id,
            username: '',
            date: travels[i].date,
            imgurl: [],
        })
    }

    // 通过使用Promise.all等待所有的异步操作完成
    await Promise.all(
    travels.map(async (element,index) => {
        // 查找图片
        let images = []
        try{
            sqlSearchItem = 'SELECT * FROM image WHERE travel_id=?'
            images = await new Promise((resolve, reject) => {
                db.query(sqlSearchItem, element.id, function (error, dataStr) {
                  if (error) {
                    reject(error.message)
                  } else {
                    resolve(dataStr)
                  }
                })
              })
        } catch (error) {
            console.log(error)
        }
        // 将图片写入总的数据中
        images.map(ele => {
            datas[index].imgurl.push(ele.picture)
        })

        // 查找用户
        let username = ''
        try{
            sqlSearchItem = 'SELECT username FROM user WHERE id=?'
            username = await new Promise((resolve, reject) => {
                db.query(sqlSearchItem, element.user_id, function (error, dataStr) {
                  if (error) {
                    reject(error.message)
                  } else {
                    resolve(dataStr)
                  }
                })
              })
        } catch (error) {
            console.log(error)
        }
        // 将用户名写入总的数据中
        datas[index].username = username[0].username
    })
)

    res.send(datas)

}

module.exports = searchManager