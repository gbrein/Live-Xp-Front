import React, {Component} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navi from './Components/Navi';
import Navi2 from './Components/Navi2';
import Home from './views/Home';
import FooterPage from './Components/FooterPage';
import Login from './views/Login';
import Client from './views/Client';
import Logout from './views/Logout';
import axios from 'axios';

const http = axios.create({baseURL: 'http://127.0.0.1:3000/'})

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
            loged: false,
            userdata: '',
            loginForm: {
                username: '',
                password: '',       
                
            }
        }
        this.handleUpdate = this
        .handleUpdate
        .bind(this);
        this.handlePostUser = this
        .handlePostUser
        .bind(this);
        this.handlePostClient = this
        .handlePostClient
        .bind(this);
        this.handleLogout = this
        .handleLogout
        .bind(this);
    }
   
    handleUpdate(value, id) {
        let newLoginForm = this.state.loginForm
        if (newLoginForm[id] === '') {
            newLoginForm[id] = value
        } else {
            newLoginForm[id] = value;
        }
       return this.setState({loginForm: newLoginForm})
    }

    handlePostUser (){
        console.log(this.state.loginForm)
        http
            .post('user', (this.state.loginForm)).then(data => {
                this.setState({userdata: data})
                this.setState({loged: true})
            }
            )
    }
    
    handlePostClient (){
        console.log(this.state.loginForm)
        http
            .post('client', (this.state.loginForm)).then(data => console.log(data))
    }
    
    handleLogout(){
        this.setState({loged:false})
    }

    componentWillMount () {
        http
            .get('Schools')
            .then(data => this.setState({data: data.data})) 
    }
    render() {
        return (
            <div className="App">
                {(this.state.loged?<Navi2 sticky="top"/>:<Navi sticky="top"/>)}
                <Switch>
                    <Route exact path='/' render= { ()=> <Home schools={this.state.data}/>}/>
                    <Route path='/login' render={() => (this.state.loged ?<Home /> :<Login buttonClick={this.handlePostUser} action={this.handleUpdate} loginData={this.state.loginForm}/> )}/>
                    <Route path='/Client' render={() => <Client buttonClick2={this.handlePostClient} action={this.handleUpdate} loginData={this.state.loginForm}/>}/>
                    <Route path='/logout' render={() =><Logout   action={this.handleLogout} /> }/>
                </Switch>
                <FooterPage/>
            </div>
        );
    }
}

export default App;
