import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import Create from '../pages/Create';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Members from '../pages/Members';
const MainBody = () => {
    
    return (
        <Switch>
            <Route path="/" exact>
                <Dashboard/>
            </Route>
            <Route path="/create" exact>
                <Create/>
            </Route>
            <Route path="/members" exact>
                <Members/>
            </Route>
            <Route path="/login" exact>
                <Login/>
            </Route>
            <Route path="/sign-up" exact>
                <Signup/>
            </Route>
        </Switch>
    )
}

export default MainBody
