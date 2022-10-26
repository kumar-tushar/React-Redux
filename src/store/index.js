import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'authentication',
    initialState : { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated=true
        },
        logout(state) {
            state.isAuthenticated=false
        }
    }
})

const store = configureStore({reducer: {auth: authSlice.reducer}})
export default store
export const authActions = authSlice.actions

