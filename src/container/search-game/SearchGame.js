import React, { Component } from 'react';
import './search-game.css';
import Axios from 'axios';
import SearchResults from './search-results/SeachResults';
import {Link} from 'react-router-dom';

class SearchGame extends Component {

    state ={
        searchResults: null
    }


    searchInput = (e) =>{
        if(e.target.value !== ''){
            setTimeout(()=>{
                Axios.get(`https://api.rawg.io/api/games?search=${e.target.value}`)
                    .then(response =>{
                        this.setState({
                            searchResults : response.data.results
                        })
                        
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                    
            }, 3000)
        }else{
            this.setState({
                searchResults : null
            })
        }
        }
    render(){
        let searchResults;
        if(this.state.searchResults){
            searchResults = (
                <div className='search-results'>
                    {this.state.searchResults.map(elem =>(
                        <Link to={`/game/${elem.id}`} key={elem.id}>
                            <SearchResults
                                key={elem.id} 
                                name={elem.name} 
                                image={elem.background_image}
                                />
                        </Link>
                    ))}
                    {console.log(this.state.searchResults)}
                </div>
            )
        }



        return(
            <div>
                <div className='search-container'>
                    {/* <span className='select-genre'>All </span> */}
                    <input 
                        type='text' 
                        className='search-input' 
                        placeholder='Search entire store here...'
                        onChange={this.searchInput}/>
                    <button className='search-button'>Search</button>
                    {searchResults}

                </div>
                {/* <button onClick={this.clearState} className='clear-button'>clear</button> */}

        </div>
        )
    }
}

export default SearchGame;