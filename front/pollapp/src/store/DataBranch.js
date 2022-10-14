import {createSlice,configureStore} from '@reduxjs/toolkit';
import pollCardSlice from './pollCardSlice';
import authSlice from './authSlice';
import RedoSlice from './RedoSlice';
const store = configureStore({
    reducer:{
        "pollCardReducer":pollCardSlice.reducer,
        "authReducer"    :authSlice.reducer,
        "redoReducer"    :RedoSlice.reducer,
    },
});
export default store;
