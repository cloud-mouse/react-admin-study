import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  token: string | null
  userInfo: {
    username: string
    avatar?: string
    roles?: string[]
  } | null
  isLoggedIn: boolean
}

const initialState: UserState = {
  token: localStorage.getItem('token'),
  userInfo: JSON.parse(localStorage.getItem('userInfo') || 'null'),
  isLoggedIn: !!localStorage.getItem('token')
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isLoggedIn = true
      localStorage.setItem('token', action.payload)
    },
    setUserInfo: (state, action: PayloadAction<UserState['userInfo']>) => {
      state.userInfo = action.payload
    },
    logout: (state) => {
      state.token = null
      state.userInfo = null
      state.isLoggedIn = false
      localStorage.removeItem('token')
    }
  }
})

export const { setToken, setUserInfo, logout } = userSlice.actions
export default userSlice.reducer