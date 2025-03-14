import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store/hooks'
import { setToken, setUserInfo } from '@/store/slices/userSlice'

interface LoginFormData {
  username: string
  password: string
}

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch()

  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (values: LoginFormData) => {
    try {
      setLoading(true)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would call your backend API here
      if (values.username === 'admin' && values.password === '123456') {
        message.success('登录成功！')
        // Store token in localStorage
        localStorage.setItem('token', 'dummy-token')
        localStorage.setItem(
          'userInfo',
          JSON.stringify({
            username: values.username,
          }),
        )
        dispatch(setToken('dummy-token'))
        dispatch(
          setUserInfo({
            username: values.username,
          }),
        )
        navigate('/', { replace: true })
      } else {
        message.error('用户名或密码错误！')
      }
    } catch (error) {
      console.log(error)
      message.error('登录失败，请重试！')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>系统登录</h1>
        <Form name="loginForm" onFinish={handleLogin} autoComplete="off">
          <Form.Item name="username" rules={[{ required: true, message: '请输入用户名！' }]}>
            <Input prefix={<UserOutlined />} autoComplete={'off'} placeholder="请输入用户名" size="large" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: '请输入密码！' }]}>
            <Input.Password prefix={<LockOutlined />} autoComplete={'off'} placeholder="请输入密码" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block size="large">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginPage
