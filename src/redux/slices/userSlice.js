import { createSlice } from '@reduxjs/toolkit'
import { fetchUsers } from '../asyncThunk/user.thunk'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    list: [],
    status:"",
    error:""
  },
  reducers: {
  },
  extraReducers(builder){
    builder
    .addCase(fetchUsers.pending, (state, action) => {
        state.status = "loading"
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log("---------->>> action", action)
        state.status = "succeeded"
        state.list = action.payload.data;
    })
    .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed"
        state.error = action.error.message
    })
  }
})

export default userSlice.reducer

export const getAllUsers = (state) => state.user.list
export const getUserError = (state) => state.user.error
export const getUserStatus = (state) => state.user.status
