import React from 'react'
import './PollCard.css'
import PollOptionSection from './PollOptionSection'
const PollCard = (props) => {
    // console.log(props);
    const getTotalVotes=(options)=>{
        let res = 1;
        // options.forEach(obj => {
        //     res+=obj.voteValue
        // });
      
        return res;
    }
    const totalVotes = getTotalVotes(props.option);
    const getWidth = (value,total)=>{
        return ((value/total)*100).toFixed(0);
    }
    return (
        <div className="pollCard">
            <section className="pollCard_1">
                {props.pollQuestion}
            </section>     
            <section className="pollCard_2">
                {
                    props.option.map((obj)=>{
                        return <PollOptionSection 
                                    width = {getWidth(obj.voteValue,totalVotes)} 
                                    title = {obj.voteStatement}
                                    key = {obj.id}
                                    {...obj}
                                />
                    })
                }
                    
                {/* <PollOptionSection 
                    width = {getWidth(option1,total)} 
                    title = {props['title1']}
                />
                <PollOptionSection 
                    width = {getWidth(option2,total)} 
                    title = {props['title2']}
                />
                <PollOptionSection 
                    width = {getWidth(option3,total)} 
                    title = {props['title3']}
                />
                <PollOptionSection 
                    width = {getWidth(option4,total)} 
                    title = {props['title4']}
                /> */}
            </section>     
            <section className="pollCard_3">
                <div className="votesSection">
                    {totalVotes} votes
                </div>
                <button className='viewButton'>
                    view result
                </button>
                
            </section>     
        </div>
    )
}

export default PollCard