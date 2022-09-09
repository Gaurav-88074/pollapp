import './Signup.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import FetchSignupPost from '../../fetchAPiData/FetchSignupPost';
const Signup = ()=>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const usernameHandler = (event)=>{
        setUsername(event.target.value);
    }
    const emailHandler = (event)=>{
        setEmail(event.target.value);
    }
    const passwordHandler = (event)=>{
        setPassword(event.target.value);
    }
    const createAccountHandler = (event)=>{
        // console.log(username);
        // console.log(email);
        // console.log(password);
        const obj = {
            username:username,
            email:email,
            password:password,
        }
        // setUsername("");
        // setPassword("");
        // setEmail("");
        // console.log(obj);
        FetchSignupPost(obj);
    }
    return(
        <div className="signupDom">
            <div className='signupArea'>
                <section className="choiceSection">
                    <NavLink to='/login' exact >
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
                    placeholder='First & Last Name'
                    value= {username}
                    onChange ={usernameHandler}
                    />
                </section>
                <section className='inputSection'>
                    <div className="logo">

                    </div>
                    <input type="email" 
                        className='inputTextSection'
                        placeholder='Email'
                        value={email}
                        onChange={emailHandler}
                        />
                </section>
                <section className='inputSection'>
                    <div className="logo">

                    </div>
                    <input type="password" 
                        className='inputTextSection'
                        placeholder='Your Password'
                        value = {password}
                        onChange={passwordHandler}
                        />
                </section>
                <section className='buttonSection'>
                    <button 
                        className='signupButton'
                        onClick={createAccountHandler}
                    >
                        Create An Account
                    </button>
                </section>
                <section className='connectSection'>

                </section>
            </div>
        </div>
    )
}
export default Signup;