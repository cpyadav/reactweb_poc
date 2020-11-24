import React from 'react';
import { Route,BrowserRouter, Switch, Redirect, Router } from 'react-router-dom';
import Signup from './Signup'; 
import DataList from './Datalist'; 
function Routes() {
    return (
        <div>
            <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Signup} />
                <Route path="/datalist" exact component={DataList} />
            </Switch>
            </BrowserRouter>

        </div>
    );
}
export default Routes;