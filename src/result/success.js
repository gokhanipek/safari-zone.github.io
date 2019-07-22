import React from 'react'
import { Link } from 'react-router-dom';


export default class Success extends React.Component {
    render() {
        return (
            <div className="w-100 py-3 justify-content-center">
                <div className="w-75 mx-auto text-center">
                    <h3 className="text-white">Congragulations {this.props.location.userName}!</h3>
                    <h3 className="text-white">Your score: { this.props.location.pokeballs }</h3>
                    <p className="text-white">By completing the competition succesfully, you have been awarded with this rare and shiny Pikachu Card</p>
                    <img className="img-fluid img-thumbnail w-100" src="./img/prize.jpg"/>
                    <Link to={'/'}> <p className="btn btn-success m-2 text-warning">Start Over</p> </Link>

                </div>
            </div>
        )
    }
}
