import React from 'react';
import {Button} from 'antd';
// const url ='210.51.42.151';
const url = '127.0.0.1';
 
 function Post(){
    const Click = () => {
        const data = {
            name: 'zjj',
            password: 'zjj1234',
            power: 0,
          };
        const body = JSON.stringify(data);
        fetch(
            `http://${url}:90/loadall`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
            }
        )
        .then(response => response.json())
        .then(json => {
            // 处理返回的数据
            console.log(json);
          })
    }
    return(
        <div>
            <Button onClick={Click}>发送</Button>
        </div>
    )
 }

 export default Post