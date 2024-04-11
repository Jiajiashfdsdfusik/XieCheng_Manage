import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import './login.css';
import { Button, Layout, Form, Input, Radio, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import {connect} from 'react-redux';
import login from '../store/actions/action';
const url = '127.0.0.1';

const { Header, Footer, Content } = Layout;


const LoginItem = (props) => {
    const data = {
        userName: ['zjj', 'cx', 'wxt', 'yhm'],
        passWord: ['zjj1234', 'cx1234', 'wxt1234', 'yhm1234'],
        power: [1,0,0,1,1],
    };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isManager, setIsManager] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error ,setError] = useState('用户名或密码错误');

    const navigate = useNavigate();

    // 确认输入数据:onFinish函数是在按钮设置了htmlType="submit"属性，在点击效验规则全部通过时触发的函数。
    const onFinish = () => {
        // 进行用户名和密码的验证逻辑，这里简化为判断是否为admin和password
      //   for(var i=0; i<data.userName.length; i++) {
      //     if (username === data.userName[i]) {
      //       if (password === data.passWord[i]) {
      //         if(isManager === data.power[i]) {
      //           console.log('登录成功,即将跳转!');
      //           console.log(isManager);
      //           console.log(username);
      //           props.action({login: 'login', name: username, power: isManager});
      //           navigate('/manage');
      //           return;
      //         }else {
      //           console.log('权限错误');
      //           setError('权限错误');
      //           setIsModalOpen(true);
      //           return
      //         }
      //       }
      //     };
      // };
      // console.log('用户或密码可能不正确');
      // setError('用户名或密码错误');
      // setIsModalOpen(true);
      // 从数据库进行数据验证
      const send = {
        name: username,
        password: password,
        power: isManager,
        };
    const body = JSON.stringify(send);
    fetch(
        `http://${url}:90/register`,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: body,
        }
    )
    .then(response => response.json())
    .then(json => {
        // 处理返回的数据
        console.log(json);
        if(json.success === 'success'){
            console.log('注册成功')
            navigate('/')
        }else{
            console.log('注册失败')
            setError(json.error);
            setIsModalOpen(true);
        }
    })
    };
    // onFinishFailed函数是在按钮设置了htmlType="submit"属性，在点击效验规则有部分未通过效验时触发的函数。
    const onFinishFailed = () => {
    if (username === '' || password === '') {
        setError('请输入用户名和密码');
        setIsModalOpen(true);
        return;
    };
    };

    // 注册新权限
    const register = () => {
        const send = {
            name: username,
            password: password,
            power: isManager,
            };
        const body = JSON.stringify(send);
        fetch(
            `http://${url}:90/register`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: body,
            }
        )
        .then(response => response.json())
        .then(json => {
            // 处理返回的数据
            console.log(json);
            if(json.success === 'success'){
                console.log('注册成功')
                navigate('/')
            }else{
                console.log('注册失败')
                setError(json.error);
                setIsModalOpen(true);
            }
          })
    }

    return (
      <div className='content_login'>
        <Modal title="注册错误" open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => setIsModalOpen(false)}>
          <p>{error}</p>
        </Modal>
          <Form className='content_form'
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
          >
            <h2 className='content_title'>管理员注册</h2>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: '请输入用户名!' }]}
              className='content_input'
            >
              <Input value={username} onChange={(e) => setUsername(e.target.value)}  />
            </Form.Item>
            

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '请输入密码!' }]}
              className='content_input'
            >
              <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
            >
              <Radio.Group onChange={(e) => setIsManager(e.target.value)} value={isManager}>
                <Radio value={0}>审核人员</Radio>
                <Radio value={1}>管理员</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item>
                <Button type="primary" onClick={()=>navigate('/')} className='login-button'>
                    登录
                </Button>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
          </Form>
      </div>
    );
};

function Register(props) {
  const {login, name, power, Login} = props;
  const state = {
    action: Login,
  }
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(()=>{
    setWindowHeight(window.innerHeight);
    window.history.pushState(null, null, document.URL); // 阻止浏览器返回上一页面
  }, []);

  return (
    <Layout  style={{height: windowHeight}}>
        <Header className='header'>
            <img src={logo} alt="logo"/>
            <div>鸭先知 & 明知山 用户审核系统</div>
        </Header>
        <Content className='content'>
          <div className='content_main'>
            <LoginItem {...state}/>
          </div>
        </Content>
        <Footer className='footer'>
            <p>@周佳佳</p>
        </Footer>
    </Layout>
  );
};

// 将状态存入props中
const mapStateToProps = (state) => {
  return{
    login: state.login,
    name: state.name,
    power: state.power,
  }
};
// 将dispatch存入props中
const mapDispatchToProps = (dispatch) => {
  return{
      Login: (manager) => dispatch(login(
        {login: manager.login, name: manager.name, power: manager.power}
      ))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
