import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navi from './Components/Navi';
import Home from './views/Home';
import FooterPage from './Components/FooterPage';
import Login from './views/Login';
import Logout from './views/Logout';
import axios from 'axios';

const http = axios.create({baseURL: 'http://127.0.0.1:3000/Escolas'})

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        http
            .get()
            .then(data => this.setState({data: data.data}))
    }
    render() {
        return (
            <div className="App">
                <Navi sticky="top"/>
                <Switch>
                    <Route exact path='/' render= { ()=> <Home />}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route path='/logout' render={() => <Logout/>}/>
                </Switch>
                <FooterPage/>
            </div>
        );
    }
}

export default App;
