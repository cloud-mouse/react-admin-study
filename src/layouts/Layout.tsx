// src/components/Layout.tsx
import React, { useState } from 'react'
import { Layout as AntdLayout, Menu, Dropdown, Avatar, Space, message, Button } from 'antd'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HomeOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons'
import './Layout.styles.css'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { logout } from '@/store/slices/userSlice'
import avator from '@/assets/images/avator.png'

const { Header, Sider, Content } = AntdLayout

interface LayoutProps {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { userInfo, isLoggedIn } = useAppSelector((state) => state.user)
  const location = useLocation()
  const navigate = useNavigate()
  const currentPath = location.pathname
  console.log(currentPath)

  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    // 清除本地存储的用户信息
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    message.success('退出登录成功')
    dispatch(logout())
    // 跳转到登录页
    navigate('/login')
  }

  const userMenu = {
    items: [
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: '退出登录',
        onClick: handleLogout,
      },
    ],
  }

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={!collapsed ? 'demo-logo-vertical' : 'demo-logo-vertical is-collapsed'}>
          <h4> React-Admin</h4>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['/']}
          selectedKeys={[currentPath]}
          items={[
            {
              key: '/',
              icon: <HomeOutlined />,
              label: <Link to="/">首页</Link>,
            },
            {
              key: '/items',
              icon: <UserOutlined />,
              label: <Link to="/items">列表</Link>,
            },
          ]}
        />
      </Sider>
      <AntdLayout>
        <Header
          style={{
            background: '#fff',
            padding: '0 24px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          {/* <h1 className="header-title">后台管理</h1> */}
          <Dropdown menu={userMenu} placement="bottomRight">
            <Space className="user-info" style={{ cursor: 'pointer' }}>
              {isLoggedIn ? (
                <Avatar src={avator} alt="avatar" crossOrigin="anonymous" />
              ) : (
                <Avatar icon={<UserOutlined />} />
              )}
              <span>{userInfo?.username || '未登录'}</span>
            </Space>
          </Dropdown>
        </Header>
        <Content className="main-content">{children}</Content>
      </AntdLayout>
    </AntdLayout>
  )
}

export default Layout
