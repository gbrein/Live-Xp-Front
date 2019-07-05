import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import Navi from './Components/Navi';
import Home from './Components/Home';
import FooterPage from './Components/FooterPage'

function App() {
    return (
        <div className="App">
            <Navi sticky="top"/>
            <Switch>
                <Route
                    exact
                    path='/'
                    render=
                    { ()=> <Home />}/>
            </Switch>
            <FooterPage />
        </div>
    );
}

export default App;
