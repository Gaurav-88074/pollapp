import './App.css';
import Navbar from './header/navbar/Navbar';
import MainBody from './main/Body/MainBody';
import { authActions } from './store/authSlice';
import { useDispatch, useSelector} from 'react-redux';
function App() {
  const hasToken = localStorage.getItem("authData")==null?false:true;
  const dispatch = useDispatch();
  if(hasToken){
    dispatch(authActions.login())
  }
  
  return (
    <div className="dom">
      <Navbar/>
      <MainBody/>
    </div>
  );
}

export default App;
