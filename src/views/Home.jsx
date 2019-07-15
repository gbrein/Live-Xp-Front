import React, {Component} from 'react';
import Header from '../Components/Header';
import Place from '../Components/Place';

class Home extends Component {

    render() {
        return (
            <div className="home-containeer">
                <div className="mx-auto justify-content-center">
                    <Header/>
                    <hr className="my-2"/>
                    <Place/>
                </div>
            </div>
        )
    }
}

export default Home;