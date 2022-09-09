import React from 'react'
import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState = {
    authData : null,
    access   : null,
    refresh  : null,
    email    : null,
    username : null,
    isLoggedIn:false,
}
const authSlice = createSlice({
    name : 'auth',
    initialState:initialState,
    reducers : {
        setAuthToken(state,action){
            state.authData =  action.payload;
        },
        setAccessToken(state,action){
            state.access =  action.payload.access;
        },
        setRefreshToken(state,action){
            state.refresh =  action.payload.refresh;
        },
        login(state,action){
            state.isLoggedIn = true;
        },
        logout(state,action){
            state.isLoggedIn = false;
        },
    }
});
export default authSlice;
export const authActions = authSlice.actions;