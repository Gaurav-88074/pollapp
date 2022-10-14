import React from 'react'
import './PollCard.css'
import PollOptionSection from './PollOptionSection'
const PollCard = (props) => {
    // console.log(props);
    const getTotalVotes=(options)=>{
        let res = 0;
        options.forEach(obj => {
            res+=obj.users.length
        });
        // console.log(res);
        return res;
    }
    const totalVotes = getTotalVotes(props.options);
    const getWidth = (value,total)=>{
        return ((value/total)*100).toFixed(0);
    }
    return (
        <div className="pollCard">
            <section className="pollCard_1">
                {props.title}
            </section>     
            <section className="pollCard_2">
                {
                    props.options.map((obj)=>{
                        return <PollOptionSection 
                                    width = {getWidth(obj.users.length,totalVotes)} 
                                    title = {obj.voteStatement}
                                    key = {obj._id}
                                    pollOptionId = {obj._id}
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
                    View result
                </button>
                
            </section>     
        </div>
    )
}

export default PollCard