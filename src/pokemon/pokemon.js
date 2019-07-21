import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './pokemon.css'


export default class Pokemon extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
      }
    clicked(pokemon){
      this.props.click(pokemon)
    }
    render(){
      return (
        <div className={
            "col-md-4 col-sm-4 card" + (!this.props.close ? ' opened' : '') + (
                this.props.complete ? ' matched' : ''
                )} 
            onClick={
                () => this.props.complete ?
                 null : this.clicked(
                     this.props.pokemon
                )}>
          <div className="front">
            <img className="img-thumbnail" src={`/img/pokeball.png`}/>
          </div>
          <div className="back">
            <img src={`/img/${this.props.pokemon}.png`}/>
          </div>
        </div>
      )
    }
  }
  