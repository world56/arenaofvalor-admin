import React from 'react';
// import model from './models';
import Entrance from '@/router';
import ReactDOM from 'react-dom';
// import { ConfigProvider } from 'antd';
// import { Provider } from 'react-redux';
import * as Cache from './config/cache';
// import zhCN from 'antd/es/locale/zh_CN';

const Root = (

  <Entrance />

);

ReactDOM.render(Root, document.getElementById('root'));
Cache.unregister();