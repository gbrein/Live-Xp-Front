import React, {Component, Redirect} from 'react';


class Logout extends Component {

    componentWillMount(){
     const {action} = this.props;
     console.log(action)
    }

    render() {
        return (
            <>
            </>

        )
    }
}

export default Logout;