import React from 'react'
import { useState ,useEffect} from 'react'

import { useDispatch } from 'react-redux';
import { pollCardActions } from '../store/pollCardSlice';
import './CreateOptionParent.css'
const CreateOptionParent = (props) => {
    
    const dispatch = useDispatch();
    const [inputStatement, setInputStatement]=useState(null);

    const inputChangeHandler =(event)=>{
        setInputStatement(event.target.value)
        // console.log(event.target.value);
    }
    const blurHandler=(event)=>{
        // console.log("ignore huh!");
        // console.log(inputStatement);
    
        dispatch(pollCardActions.setOptionsState(
            {
                [props.index+1] : inputStatement,
            }
        ));
    }
    

    return (
            <section className="createOptionParent" >
                <div className="optionLogo">
                
                </div>
                <input 
                    type="text" 
                    className="createOption"
                    placeholder={`Option ${props.index+1}`}
                    value = {inputStatement==null?'':inputStatement}
                    onChange = {inputChangeHandler}
                    onBlur = {blurHandler}
                />
            </section>
  )
}

export default CreateOptionParent