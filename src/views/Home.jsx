import React, {Component} from 'react';
import Header from '../Components/Header';
import Place from '../Components/Place';

class Home extends Component {

    render() {
        const {schools} = this.props;
        return (
            <div className="home-containeer">
                <div className="mx-auto justify-content-center">
                    <Header/>
                    <hr className="my-2"/>
                    <Place schools={schools}/>
                </div>
            </div>
        )
    }
}

export default Home;