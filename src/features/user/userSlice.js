import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        token: ''
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
            state.token = action.payload.token;

        },
        logout: (state,action) => {
            state.email = ''
            state.token = '';
        }
    }
})

export const {login, logout} =  userSlice.actions

export default userSlice.reducer