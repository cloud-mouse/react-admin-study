// routes/index.ts
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home/Home';
import List from '../pages/List/index';
import Login from '../pages/Login/index';
import React from 'react';

// 定义路由配置数组
const routes: RouteObject[] = [
  {
    path: '/',
    element: React.createElement(Home),
  },
  {
    path: '/items', 
    element: React.createElement(List),
  },
  {
    path: '/login', 
    element: React.createElement(Login),
  },
];

export default routes;