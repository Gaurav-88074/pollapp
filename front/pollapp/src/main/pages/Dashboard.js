import './Dashboard.css';
import PollCard from '../../components/PollCard';
import FetchData from '../../fetchAPiData/fetchData';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Dashboard = () =>{
    FetchData();
    const reduxData = useSelector((state)=>{
        return state.pollCardReducer.allCardData;
    });
        
    return (
        <div className = {'body'}>
            <section className={'pollSection'}>
                {
                    reduxData!=null
                        &&
                    reduxData.map((obj)=>{
                        return <PollCard key = {obj._id} {...obj}/>
                    })
                }
                
            </section>
        </div>
    );
}

export default Dashboard;