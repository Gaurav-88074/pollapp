import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { pollCardActions } from '../store/pollCardSlice';
import { useState ,useCallback} from 'react';
import { useSelector } from 'react-redux';
const FetchData =()=>{
    const dispatch = useDispatch();
    const [reduxData, setReduxData] = useState([]);
    const originalData = useSelector(state =>state.pollCardReducer.allCardData);

    useEffect(() => {
        const fetchFromBackend = async ()=>{
            let response = await fetch('http://127.0.0.1:8000/polls');
            if (response.status==200){
                let data = await response.json();
                // console.log(data);
                setReduxData(data);
            }
        }
        fetchFromBackend();
    }, [])
    if (reduxData.length!=0 && originalData==null) {
        dispatch(pollCardActions.set(reduxData));
        // console.log(reduxData);
    } 
}

export default FetchData;