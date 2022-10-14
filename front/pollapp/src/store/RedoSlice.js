import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    refresh : false,
}
const RedoSlice = createSlice({
    name : 'redo',
    initialState:initialState,
    reducers : {
        toggle(state){
            state.refresh=!state.refresh;
        }
        
    }
});
export default RedoSlice;
export const RedoActions = RedoSlice.actions;