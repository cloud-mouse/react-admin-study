// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css' // 引入全局样式
import App from './App'

// 创建根 DOM 节点
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

// 渲染 App 组件到根节点
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
