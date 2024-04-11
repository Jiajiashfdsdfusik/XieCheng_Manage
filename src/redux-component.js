import React from 'react';
import {Button} from 'antd';
import {connect} from 'react-redux';
import login from './store/actions/action';

function Component(props){
    const {islogin, username, Login} = props;
    return(
    <div>
        <p>{username}</p>
        <p>{islogin}</p>
        <Button onClick={() => Login({login: 'login', name: 'zjj'})}>登录</Button>
      </div>
    )
}
const mapStateToProps = (state) => {
    return{
        islogin: state.login,
        username: state.name,
    }
};
const mapDispatchToProps = (dispatch) => {
    return{
        Login: (manager) => dispatch(login({login: manager.login, name: manager.name}))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Component)