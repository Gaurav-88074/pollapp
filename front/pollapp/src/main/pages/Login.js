import './Login.css';
import { NavLink } from 'react-router-dom';
import { useState,useEffect } from 'react';
import FetchLoginPost from '../../fetchAPiData/FetchLoginPost';
import { authActions } from '../../store/authSlice';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
const Login = ()=>{
    let histroy = useHistory();
    const dispatch = useDispatch();
    const authRedux = useSelector(state=>state.authReducer.authData);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [tokenData, setTokenData] = useState(null);
    const usernameHandler =(event)=>{
        setUsername(event.target.value);
    }
    const passwordHandler =(event)=>{
        setPassword(event.target.value);
    }
    
    
    const loginPost = async (obj)=>{
        let  response = await fetch('http://127.0.0.1:8000/login',{
            method :'POST',
            headers :{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(
                {
                    'username':obj.username,
                    'password':obj.password
                }
            )
        })
        const data = await response.json();
       
        if (response.status===200 ){
            // console.log(data);
            setTokenData(data);
            localStorage.setItem("authData",JSON.stringify(data))
            dispatch(authActions.setAuthToken(tokenData))
            dispatch(authActions.login())
            histroy.push('/')
        }
    }
    
    
    
    const loginHandler = ()=>{
        const obj = {
            username:username,
            password:password,
        }
        // console.log(obj);
        loginPost(obj)
        
    }
    return(
        <div className="loginDom">
            <div className="loginArea">
                <section className="choiceSection">
                    <NavLink to='/login' exact 
                    
                    >
                        <button className = 'choiceButton'>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to='/sign-up' exact >
                        <button className = 'choiceButton'>
                            Sign Up
                        </button>
                    </NavLink>
                </section>
                <section className='inputSection'>
                    <div className="logo">

                    </div>
                    <input type="text" 
                        className='inputTextSection' 
                        placeholder='Your Username or email'
                        value = {username}
                        onChange={usernameHandler}
                    />
                </section>
                <section className='inputSection'>
                    <div className="logo">

                    </div>
                    <input type="password" 
                        className='inputTextSection'
                        placeholder='Your Password'
                        value = {password}
                        onChange ={passwordHandler}
                        />
                </section>
                <section className='other'>

                </section>
                <section className='buttonSection'>
                    <button 
                        className='loginButton'
                        onClick={loginHandler}
                    >
                        Log In
                    </button>
                </section>
                <section className='connectSection'>

                </section>
            </div>
        </div>
    );
}
export default Login;