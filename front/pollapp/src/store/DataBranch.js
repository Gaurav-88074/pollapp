import {createSlice,configureStore} from '@reduxjs/toolkit';
import pollCardSlice from './pollCardSlice';
import authSlice from './authSlice';
const store = configureStore({
    reducer:{
        "pollCardReducer":pollCardSlice.reducer,
        "authReducer":authSlice.reducer
    },
});
export default store;
