// App.tsx
import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Layout from './layouts/Layout'
import routes from './routes/index'
import { useAppSelector } from './store/hooks'

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.user)

  return (
    <Routes>
      {/* 登录路由单独配置，不使用Layout */}
      <Route path="/login" element={routes.find((route) => route.path === '/login')?.element} />

      {/* 路由拦截 */}
      {isLoggedIn ? (
        // 如果已登录，允许访问其他路由
        routes
          .filter((route) => route.path !== '/login')
          .map((route, index) => <Route key={index} path={route.path} element={<Layout>{route.element}</Layout>} />)
      ) : (
        // 如果未登录，重定向到登录页
        <Route path="*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  )
}

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>
  )
}

export default App
