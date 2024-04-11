import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/login';
import Manage from './pages/manage';
import router from './router';
import Post from './store/send';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

import {createStore} from 'redux';
import {Button} from 'antd';
import login from './store/actions/action';
import reducer from './store/reducers/reducer';
import {Provider} from 'react-redux';
import Component from './redux-component';

const store = createStore(reducer);
// console.log(store.getState());
// store.dispatch(login({login: 'login', name: 'zjj'}));
// console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <Login />
  //   <Manage />
  // </React.StrictMode>
  // <Router>
  //   <Routes>
  //     <Route path='/' Component={Login}></Route>
  //   </Routes>
  // </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <div>
  //   <p>{store.getState().name}</p>
  //   <Button onClick={() => {store.dispatch(login({login: 'login', name: 'zjj'}));console.log(store.getState().name)}}>登录</Button>
  // </div>
  <Provider store={store}>
    <App />
    {/* <Post></Post> */}
  </Provider>
  // <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
