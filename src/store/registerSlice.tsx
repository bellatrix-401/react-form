import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { AppState } from './store'

// Type for the state
export interface RegisterState {
  // Personal
  fullName: string
  email: string
  password: string

  // Business
  name: string
  phone: string
  category: string
  address: string
  file: string
}

// Initial state
const initialState: RegisterState = {
  // Personal
  fullName: '',
  email: '',
  password: '',

  // Business
  name: '',
  phone: '',
  category: '',
  address: '',
  file: '',
}

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setRegisterState(state, action) {
      return { ...state, ...action.payload }
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.register,
      }
    },
  },
})

export const { setRegisterState } = registerSlice.actions
export const selectRegister = (state: AppState) => state.register
export default registerSlice.reducer
