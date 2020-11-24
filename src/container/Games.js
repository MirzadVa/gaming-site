import Axios from 'axios';
import React, { Component } from 'react';
import Cards from '../components/cards/Cards';




class Games extends Component {

    state = {
        games : []
    }

    componentDidMount(){
        Axios.get('https://api.rawg.io/api/games')
            .then(response => {
                this.setState({
                    games : response.data.results
                })
                
            })
            .catch(error =>{
                console.log(error)
            })
    }

    render() {
        return(
            <div>
                <Cards games={this.state.games}/>
                
            </div>
            
            
        )
    }
}

export default Games;