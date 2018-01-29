import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import chat from '../components/chat'


export default class Routing extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Signup} />
                    <Route path="/signin" component={Signin} />
                    <Route path="/chat" component={chat} />
                    
               </div>
            </Router>
        )
    }
}