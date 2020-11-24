import Axios from 'axios';
import React, { Component } from 'react';
import NewReleasesFunction from '../components/new-releases/NewReleases';





class NewReleasesContainer extends Component {
    state = {
        newReleasesGames : []
    }

    componentDidMount(){
        Axios.get('https://api.rawg.io/api/games?dates=2020-09-01,2020-12-31.')
            .then(response =>{
                this.setState({
                    newReleasesGames: response.data.results
                })
            })
            .catch(error =>{
                console.log(error)
            }) 
    }


    render(){

        return(
            <div>
                <NewReleasesFunction games={this.state.newReleasesGames}/>
            </div>
        )
    }
}


export default NewReleasesContainer;