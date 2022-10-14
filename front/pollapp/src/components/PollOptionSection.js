import React from 'react'
import './PollOptionSection.css'
import { useState,useEffect } from 'react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { RedoActions } from '../store/RedoSlice'
import FetchData from '../fetchAPiData/fetchData'
const PollOptionSection = (props) => {
  let  width = props.width;
  // const refreshState = useSelector(state =>state.redoReducer.refresh);
  const dispatch = useDispatch();
  const rightHalfHandler = async ()=>{
    // console.log(props.optionTitle);
    // console.log(props.pollOptionId);
      
        const response = await fetch(`http://127.0.0.1:8000/update`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              pollOptionId: props.pollOptionId,
              userName : ""
            })
        })
        if(response.status==200){
          window.location.reload();
          // dispatch(RedoActions.toggle());
        }
  }
  
  width = isNaN(width)==true?0:width
  return (
    <div className="pollOptionSection">
        <div className="percentBox">
          {width}%
        </div>
        <div className="rightHalf" onClick={rightHalfHandler}>
            <div className="optionText">
                {props.optionTitle}
            </div>
            <div className="percentBar">
                <div className="percentBarValue" 
                      style={{width:width*5}}>
                </div>
            </div>
        </div>
    </div>
  )
}

export default (PollOptionSection)