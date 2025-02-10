// App.tsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layouts/Layout'
import routes from './routes/index'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* 登录路由单独配置，不使用Layout */}
          <Route path="/login" element={routes.find((route) => route.path === '/login')?.element} />

          {/* 其他路由使用Layout布局 */}
          {routes
            .filter((route) => route.path !== '/login')
            .map((route, index) => (
              <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />
            ))}
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
