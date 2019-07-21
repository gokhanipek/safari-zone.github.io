import React from 'react'
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            userName: ''
        }
    }

    registerUser() {
        this.setState({
          userName: this.state.userName
        })
    }

    onChangeInput(e) {
        this.setState({
          userName: e.target.value
        })
    }

    render() {
        const newTo = { 
            pathname: "/SafariZone", 
            userName: this.state.userName 
          };
          
        return (
            <div>
                <input
                value={this.state.userName}
                placeholder="What is your name?"
                onChange={this.onChangeInput.bind(this)}
                />
                <Link to={newTo}> Enter </Link>
            </div>
        )
    }
}
