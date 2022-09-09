import React from 'react'
import './Create.css'
import { useState ,useEffect} from 'react'
import { useSelector } from 'react-redux';
import CreateOptionParent from '../../components/CreateOptionParent'
const Create = () => {
    const DUMMY_OPTIONS = [
        {
            id :0,
            placeholder:""
        }, 
    ];
    
    const [optionArray,setOptionArray] = useState([]);
    const addOptionHandler = ()=>{
        console.log("bol");
        // console.log(allOptionState);
        setOptionArray(["option",...optionArray]);
    }
    useEffect(() => {
        setOptionArray(["option","option",...optionArray]);
    }, []);

    
    //************imp***********
    const optionStateArray = useSelector(
        state =>state.pollCardReducer.optionsState
    );
    const [pollQuestion, setPollQuestion] = useState("");
    const pollQuestionHandler = (event) =>{
        setPollQuestion(event.target.value);
        // console.log(event.target.value);
    }
    //***********************
    const pollCreateHandler  = async (event)=>{
        
        const rawResponse = await fetch(`http://127.0.0.1:8000/create`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                options : optionStateArray,
                pollQuestion:pollQuestion
            })
        });
    }
    const pressMeHandler =()=>{
        // console.log("Yay! im pressed");
        // console.log(pollQuestion);
        // console.log(optionStateArray);
        pollCreateHandler();
    }
    return (
        <div className='createDom'>
            <div className="createArea-1">
                <div className="questionBox">
                    {/* <div className="pollHeadBox"> */}
                        <div className="pollHeading">
                            Poll Question
                        </div>
                    {/* </div> */}
                    <input type="text" 
                        placeholder='Ask a question'
                        className='inputQuestion'
                        value = {pollQuestion}
                        onChange={pollQuestionHandler}
                    />
                </div>
            </div>
            <div className="createArea-2">
                <div className="answerHeading">
                    Answer options
                </div>
                <div className="optionBox">
                    {
                        optionArray.map((optionObj,index)=>{
                            return (
                                <CreateOptionParent 
                                    index={index}
                                    key = {index}
                                />
                            );
                        })
                    }
                    
                    <div className="addOption"
                        onClick={addOptionHandler}
                    >
                        <button className="addButton">
                            +
                        </button>
                        <div className='addAnOptionText'>
                            Add an option...
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="createSection">
                <button 
                    onClick={pressMeHandler}
                    className={'createButton'}
                >
                    Create
                </button>
            </div>
            
        </div>
    )
}

export default Create
