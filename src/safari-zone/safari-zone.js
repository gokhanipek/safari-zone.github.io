import React from 'react';
import Pokemon from './../pokemon/pokemon'
import {Redirect} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css';
import './safari-zone.css'

export default class SafariZone extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
          pokemons: ['bulbasaur','charmander','eevee','jigglypuff','pikachu','psyduck','snorlax','squirtle'],          
          duplicatePokemons: [],
          pokemonPositions: [],
          duplicatePokemons: [],
          randomPositions: [],
          encounteredPokemons: [],
          catchedPokemons: [],
          rounds: 0,
          stonesLeft: 20,
        }
        this.start()
      }

      handleClick(name,index){
        if(this.state.encounteredPokemons.length == 2){
          setTimeout(() => {
            this.check()
          },500)
        }else {
          let pokemon = {
            name,
            index
          }
          let pokemonPositions = this.state.pokemonPositions
          let pokemons = this.state.encounteredPokemons
          pokemonPositions[index].close = false
          pokemons.push(pokemon)
          this.setState({
            encounteredPokemons: pokemons,
            pokemonPositions: pokemonPositions
          })
          if(this.state.encounteredPokemons.length == 2){
            setTimeout(() => {
              this.check()
            },500)
          }
        }
      }
      
      
      start(){
        let pokemonPositions = [];
        this.state.duplicatePokemons = this.state.pokemons.concat(this.state.pokemons)
        this.state.randomPositions = this.shuffle(this.state.duplicatePokemons)
        this.state.randomPositions.map((name,index) => {
            pokemonPositions.push({
            name,
            close: true,
            complete: false,
            fail: false
          })
        })
        this.state.pokemonPositions = pokemonPositions
      }

      check(){
        let pokemonPositions= this.state.pokemonPositions;
        let catchedPokemons = this.state.catchedPokemons;
        const stonesLeft = this.state.stonesLeft;
        const numVal = this.state.rounds;


        if((this.state.encounteredPokemons[0].name == this.state.encounteredPokemons[1].name) && (this.state.encounteredPokemons[0].index != this.state.encounteredPokemons[1].index)){
          pokemonPositions[this.state.encounteredPokemons[0].index].complete = true
          pokemonPositions[this.state.encounteredPokemons[1].index].complete = true
          catchedPokemons.push(this.state.encounteredPokemons[0].index, this.state.encounteredPokemons[1].index )
        }else {
          pokemonPositions[this.state.encounteredPokemons[0].index].close = true
          pokemonPositions[this.state.encounteredPokemons[1].index].close = true
        }

        this.setState({
          rounds: numVal + 1,
          stonesLeft: stonesLeft - 1,
          pokemonPositions,
          encounteredPokemons: []
        })
        console.warn(this.state.stonesLeft , catchedPokemons.length)
      }

      shuffle(array){
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array
      }
      
      render(){
        if(this.state.catchedPokemons.length == 16 || this.state.stonesLeft == 0){
            console.log('game finished')
            const newTo = { 
                pathname: "", 
                userName: this.props.location.userName,
                stones: this.state.stonesLeft
              };
            this.state.catchedPokemons.length == 16 ? newTo.pathname = "/success" : newTo.pathname = "/failure"
            return <Redirect to={newTo} />
         }
        
        return (
          <div className="safari-zone">
            <h1>Hello { this.props.location.userName }</h1>
            <h2>Round: {this.state.rounds}</h2>
            <h3>Pokeballs: {this.state.stonesLeft}</h3>
            <h3>Pokemons Catched: {this.state.catchedPokemons.length}</h3>
            {
              this.state.pokemonPositions.map((pokemon, index) => {
                return <Pokemon 
                    pokemon={pokemon.name} 
                    click={() => this.state.encounteredPokemons.length ==  2 ? null : this.handleClick(pokemon.name,index)} 
                    close={pokemon.close} 
                    complete={pokemon.complete}/>
              })
            }
          </div>
        )
      }
  }