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
            <div className="container safari-zone col col-8 pt-5">
                <div className="justify-content-center">
                    <div className="form-group text-center">
                        <h3 className="font-weight-bold text-white">Welcome to Safari Zone!</h3>
                        <p class="text-justify text-white">This is a special zone to catch unique Pokemons! There is no fighting here. You go inside, pet and feed the pokemons. And if they like you, you may even catch them!</p>
                        <p class="text-justify text-white">Choose your level, catch them all, and you may win a prize!</p>
                        <input type="text" className="form-control" 
                            value={this.state.userName}
                            placeholder="What is your name?"
                            onChange={this.onChangeInput.bind(this)}/>
                        <Link to={newTo} className="btn btn-success m-2"> Enter </Link>
                    </div>
                </div>
            </div>
        )
    }
}
