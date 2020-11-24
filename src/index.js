import React, { Component }  from 'react';
import { Route,BrowserRouter, Switch, Redirect, Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Signup from './Signup'; 
import 'bulma/css/bulma.css'
import Routes from '../src/Routes';
import {render} from 'react-dom';
class Index extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Routes />
                </div>
            </BrowserRouter>
        )
    }
}

render(<Index/>, document.getElementById("root"))