import './Navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { authActions } from '../../store/authSlice';
import { useDispatch, useSelector} from 'react-redux';
const Navbar = () =>{
    const dispatch = useDispatch();
    
    const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)
    const logoutHandler =()=>{
        localStorage.removeItem('authData');
        dispatch(authActions.logout())
    }
    return(
        <nav className={'navbar'} >
            <section className="appNameSection">
                <div className={'appName'}> 
                    QUICK POLL
                </div>
            </section>
            <section className="navigationSection">
                <NavLink 
                    to = "/" exact
                    activeClassName={'addBorderBottom'}
                    className="dashboard  navians">
                    DASHBOARD
                </NavLink>
                <NavLink  
                    to= "/create" exact
                    activeClassName={'addBorderBottom'}
                    className="create navians">
                    CREATE
                </NavLink>
                <NavLink 
                    to= "/members" exact
                    activeClassName={'addBorderBottom'}
                    className="members navians">
                    MEMBERS
                </NavLink>
                <NavLink 
                    to= "/modify" exact
                    activeClassName={'addBorderBottom'}
                    className="modify navians">
                    MODIFY
                </NavLink>
            </section>
            <section className="freeSpace">

            </section>
            <section className="authentication">
                {
                    isLoggedIn==false
                    &&
                    <NavLink to='/login' exact 
                    className={'buttonNavLink'}
                    
                    >
                        <button className="login authBtn">
                            Login
                        </button>
                    </NavLink >
                    
                }
                {   
                    isLoggedIn==false
                    &&
                    <NavLink to='/sign-up' exact 
                    className={'buttonNavLink'}>
                        <button className="signup authBtn">
                            Sign Up
                        </button>
                    </NavLink >
                }
                {
                    isLoggedIn==true
                        &&
                    <NavLink to='/login' exact 
                    className={'buttonNavLink'}>
                        <button className="login authBtn"
                            onClick={logoutHandler}>
                            logout
                        </button>
                    </NavLink >
                }
            </section>
        </nav>
        
    )
}
export default Navbar;
