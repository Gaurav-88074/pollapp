import {createSlice,configureStore} from '@reduxjs/toolkit';

const initialState = {
    allCardData :null,
    optionsState:null
}
const pollCardSlice = createSlice({
    name : 'pollCard',
    initialState:initialState,
    reducers : {
        set(state,action){
            state.allCardData =  action.payload;
        },
        setOptionsState(state,action){
            state.optionsState = {...state.optionsState,...action.payload};
            // console.log(state.optionsState);
        }
    }
});
export default pollCardSlice;
export const pollCardActions = pollCardSlice.actions;