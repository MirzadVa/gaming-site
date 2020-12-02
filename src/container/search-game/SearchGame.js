import React, { Component } from 'react';
import './search-game.css';
import Axios from 'axios';
import SearchResults from './search-results/SeachResults';
import {Link} from 'react-router-dom';
import SearchIcon from '../../assets/icons/search.svg';

class SearchGame extends Component {

    state ={
        searchResults: null,
        searchInput: false
    }


    searchInput = (e) =>{
        if(e.target.value.trim() !== ''){
            setTimeout(()=>{
                Axios.get(`https://api.rawg.io/api/games?search=${e.target.value}`)
                    .then(response =>{
                        this.setState({
                            searchResults : response.data.results,
                            searchInput: true
                        })
                        
                    })
                    .catch(error =>{
                        console.log(error)
                    })
                    
            }, 2000)
            
        }else{
            this.setState({
                searchInput : false,
                searchResults: null
            })
            
        }
        }
    render(){
        let searchResults;
        if(this.state.searchResults){
            searchResults = (
                <div className='search-results'>
                    {this.state.searchResults.map(elem =>(
                        <Link to={`/game/${elem.id}`} key={elem.id} style={{textDecoration: 'none', color: '#ffffff'}}>
                            <SearchResults
                                key={elem.id} 
                                name={elem.name} 
                                image={elem.background_image}
                                />
                        </Link>
                    ))}
                </div>
            )
        }



        return(
            <div>
                <div className='search-container'>
                    <input 
                        type='text' 
                        className='search-input' 
                        placeholder='Search entire store here...'
                        onChange={this.searchInput}/>
                        <img src={SearchIcon} className='search-icon'/>
                    {this.state.searchInput ? searchResults : null}

                </div>

        </div>
        )
    }
}

export default SearchGame;