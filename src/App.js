import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "./Pages/Index";
import Profile from "./Pages/Profile";

class App extends Component{
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/profile' component={Profile}/>
                        <Route exact path='/' component={Index}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
