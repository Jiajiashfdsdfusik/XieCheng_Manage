import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import logo from '../logo.svg';
import qs from 'qs';
import './manage.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Layout, Form, Input, Radio, Modal, Avatar, Space, Select, Image, Table } from 'antd';
import {connect} from 'react-redux';
import login from '../store/actions/action';
const url = '127.0.0.1';

const { Header, Footer, Content } = Layout;


const travels = [
    {
        id: '00000',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '0',
        open: '0',
        delete: '0',
        use_id: '00000',
        date: '20240331',
        rejection: '',
    },
    {
        id: '00001',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '0',
        open: '0',
        delete: '0',
        use_id: '00001',
        date: '20240331',
        rejection: '',
    },
    {
        id: '00002',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '0',
        open: '0',
        delete: '0',
        use_id: '00002',
        date: '20240331',
        rejection: '',
    },
    {
        id: '00003',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '1',
        open: '0',
        delete: '0',
        use_id: '00003',
        date: '20240331',
        rejection: '',
    },
    {
        id: '00004',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '0',
        open: '0',
        delete: '0',
        use_id: '00004',
        date: '20240331',
        rejection: '',
    },
    {
        id: '00005',
        title: '2024.3.31日的一天',
        content: '今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！今天什么都没干，度过了美妙的一天！',
        state: '2',
        open: '0',
        delete: '0',
        use_id: '00005',
        date: '20240331',
        rejection: '就是不通过',
    },
];

const users = [
    {
        id: '00000',
        username: 'zjj',
        password: '123456zjj',
        profile: '../asserts/progile.png'
    },
    {
        id: '00001',
        username: 'cx',
        password: '123456cx',
        profile: '../asserts/progile.png'
    },
    {
        id: '00002',
        username: 'wxt',
        password: '123456wxt',
        profile: '../asserts/progile.png'
    },
    {
        id: '00003',
        username: 'yhm',
        password: '123456yhm',
        profile: '../asserts/progile.png'
    },
    {
        id: '00004',
        username: 'ljy',
        password: '123456ljy',
        profile: '../asserts/progile.png'
    },
    {
        id: '00005',
        username: 'zqx',
        password: '123456zqx',
        profile: '../asserts/progile.png'
    },
];

const images = [
    {
        id: '00000',
        travel_id: '00000',
        picture: '../asserts/progile.png'
    },
    {
        id: '00001',
        travel_id: '00001',
        picture: '../asserts/progile.png'
    },
    {
        id: '00002',
        travel_id: '00002',
        picture: '../asserts/progile.png'
    },
    {
        id: '00003',
        travel_id: '00003',
        picture: '../asserts/progile.png'
    },
    {
        id: '00004',
        travel_id: '00004',
        picture: '../asserts/progile.png'
    },
    {
        id: '00005',
        travel_id: '00005',
        picture: '../asserts/progile.png'
    },
];
let data = [];
// let datasource = data;
let datasource = [];
let userpower = 0;
const creatData = () => {
    for(let i=0; i<data.length; i++){
        datasource.push({
            key: i,
            travelID: data[i].id,
            username: data[i].username,
            userID: data[i].userID,
            title: data[i].title,
            content: data[i].content,
            imgurl: data[i].imgurl,
            state: {
              state: data[i].state,
              open: data[i].open,
              rejection: data[i].rejection,
              date: data[i].date,
            },
        })
    }
};
// for (let i = 0; i < travels.length; i++) {
//     data.push({
//       key: i,
//       travelID: travels[i].id,
//       username: users[i].username,
//       title: travels[i].title,
//       content: travels[i].content,
//       imgurl: ["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
//             "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",],
//       state: {
//         state: travels[i].state,
//         rejection: travels[i].rejection,
//         date: travels[i].date,
//       },
//       action: travels[i].state,
//     });
// };

const ManageItem = (props) => {
    const [rejection, setRejection] = useState(""); // 添加拒绝原因的状态变量
    const [rejectID, setRejectID] = useState('0');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [powerError, setPowerError] = useState(false);
    const [error, setError] = useState('');
    const columns = [
        {
          title: 'ID',
          dataIndex: 'travelID',
          width: '10%',
        },
        {
          title: '用户名',
          dataIndex: 'username',
          width: '10%',
        },
        {
          title: '标题',
          dataIndex: 'title',
          width: '15%',
        },
        {
          title: '内容',
          dataIndex: 'content',
        },
        {
          title: '图片',
          dataIndex: 'img',
          render: (_,{imgurl}) => {
            return(
            <Image.PreviewGroup
            preview={{
                onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
            }}
            >
                {imgurl.map((element, index) => {
                    let display = 'block'
                    if (index !== 0){display = 'none'}
                    return(
                        <Image src={element} style={{display: display}}/>
                    )
                })}
                {/* <Image src={imgurl}/>
                <Image src={imgurl} style={{display: 'none'}}/> */}
              </Image.PreviewGroup>
            )
          },
        },
        {
          title: '状态',
          dataIndex: 'state',
          width: '10%',
          render: (_,{state, date}) => {
            let State = '';
            let reject = '';
            if(state === '0'){
                State = '待审核';
            }else if(state === '1'){
                State = '通过'
            }else{
                State = '拒绝';
                reject = '拒绝原因:'+state;
            };
            return(
                <div>
                    <p>{State}</p>
                    <p>{reject}</p>
                    <p>发布时间:{date}</p>
                </div>
                
            )
          },
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: '10%',
          render: (_,{state, travelID}) => {
            let passButton = 'block';
            let unpassButton = 'block';
            let deleteButton = 'block';
            if(state !== '0'){
                passButton = 'none';
                unpassButton = 'none';
            };
            const delTravel = () => {
                if(userpower === 0){
                    setError('权限不足！');
                    setPowerError(true);
                }else{
                    console.log(`删除第${travelID}条数据`)
                    const send = {
                        travelID: travelID,
                      };
                    const body = JSON.stringify(send);
                    fetch(
                        `http://${url}:90/deldata`,
                        {
                            method: 'POST',
                            headers: {'Content-Type': 'application/json',},
                            body: body,
                        }
                    )
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                    })
                    setError('数据已删除，请不要重复操作！');
                    setPowerError(true);
                }
            };
            const agreeTravel = () => {
                const send = {
                    travelID: travelID,
                  };
                const body = JSON.stringify(send);
                fetch(
                    `http://${url}:90/agree`,
                    {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json',},
                        body: body,
                    }
                )
                .then(response => response.json())
                .then(json => {
                    console.log(json)
                })
                setError('游记已通过，请不要重复操作！');
                setPowerError(true);
            };
            const rejectTravel = () => {
                setRejectID(travelID);
                setIsModalOpen(true);
            }
            return(
                <div>
                    <Button style={{display: passButton}} className='button' type="primary" onClick={agreeTravel}>通过</Button>
                    <Button style={{display: unpassButton}} className='button' type="primary" onClick={rejectTravel}>不通过</Button>
                    <Button style={{display: deleteButton}} className='button' type="primary" onClick={delTravel}>删除</Button>
                </div>
            )
          },
        }
    ];

    const sendTravel = () => {
        const send = {
            travelID: rejectID,
            state: rejection,
          };
        const body = JSON.stringify(send);
        fetch(
            `http://${url}:90/reject`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: body,
            }
        )
        .then(response => response.json())
        .then(json => {
            console.log(json)
        });
        setIsModalOpen(false);
    };

    return(
        <div className='content_main_manage'>
            <Table
                columns={columns}
                dataSource={props.datasource}
                pagination={{
                pageSize: 3,
                }}
                scroll={{
                y: 470,
                }}
            />
            <Modal
            title="拒绝原因"
            open={isModalOpen} // 控制拒绝原因对话框的显示
            onOk={sendTravel}
            onCancel={() => setIsModalOpen(false)}
            >
                <Input
                value={rejection} // 将拒绝原因绑定到输入框的value属性
                onChange={(e) => setRejection(e.target.value)} // 更新拒绝原因的状态变量
                />
            </Modal>
            <Modal title="注意！" open={powerError} onOk={() => setPowerError(false)} onCancel={() => setPowerError(false)}>
                <p>{error}</p>
            </Modal>
        </div>
    )
};

function Manage(props) {
    const {login, name, power, Login} = props;
    const [windowHeight, setWindowHeight] = useState(0);
    const [key, setKey] = useState(0);
    const [loading, setLoading] = useState(true);
    const mode = [
        {value: 0, label: '所有游记'},
        {value: 1, label: '待审核游记'},
        {value: 2, label: '通过游记'},
        {value: 3, label: '拒绝游记'}
    ];
    useEffect(()=>{
      setWindowHeight(window.innerHeight);
      userpower = power;
      if(login === 'offlogin'){
        datasource = [];
        setLoading(false);
      }else{
        setLoading(true);
        // 从数据库中读取游记数据
        fetch(
            `http://${url}:90/loadall`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
            }
        )
        .then(response => response.json())
        .then(json => {
            data = json
            datasource = data
            setLoading(false); // 设置数据加载完成
        })
      };
    }, []);

    const selectModel = (value) => {
        setLoading(true);
        if(login === 'offlogin'){
            datasource = [];
            setKey(value);
            setLoading(false);
            return;
          };
        if(value !== 0){
            setLoading(true);
            // 从数据库中读取游记数据
            fetch(
                `http://${url}:90/loadall`,
                {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json',},
                }
            )
            .then(response => response.json())
            .then(json => {
                data = json
                datasource = data;
            })
            datasource = [];
            if(value === 1){
                for(let i = 0; i<data.length; i++){
                    if(data[i].state === '0'){
                        datasource.push(data[i]);
                    }
                };
            }else if(value === 2){
                for(let i = 0; i<data.length; i++){
                    if(data[i].state === '1'){
                        datasource.push(data[i]);
                    }
                };
            }else if(value === 3){
                for(let i = 0; i<data.length; i++){
                    if(data[i].state !== '0' && data[i].state !== '1'){
                        datasource.push(data[i]);
                    }
                };
            }
        }else{
            datasource = data;
        }
        console.log(`select ${value}`);
        setKey(value);
        setLoading(false); // 设置数据加载完成
    };

    return(
        <Layout  style={{height: windowHeight}}>
        <Header className='header'>
            <Space size={16}>
                <Avatar size='large' icon={<UserOutlined />} />
                <p>{name}</p>
                <Select
                defaultValue={0}
                onChange={selectModel}
                options={mode}
                className='selector'
                style={{width: window.innerWidth*0.5}}
                 />
            </Space>
        </Header>
        <Content className='content'>
            {loading ? (
                <div>Loading...</div> // 数据加载中显示的提示
            ) : (<ManageItem key={key} datasource={datasource}/>)
            }
            {/* <ManageItem key={key}/> */}
        </Content>
        <Footer className='footer'>
            <p>@周佳佳</p>
        </Footer>
    </Layout>
    )
};

const mapStateToProps = (state) => {
    return{
      login: state.login,
      name: state.name,
      power: state.power,
    }
  };
  const mapDispatchToProps = (dispatch) => {
    return{
        Login: (manager) => dispatch(login(
          {login: manager.login, name: manager.name, power: manager.power}
        ))
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(Manage);