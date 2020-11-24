import Axios from 'axios';
import React, { Component } from 'react';

class SingleProductPageClass extends Component  {
    state = {
        game : null
    }
    
    componentDidMount(){
        Axios.get(`https://api.rawg.io/api/games/${this.props.match.params.id}`)
            .then(result =>{
                this.setState({
                    game : result.data
                })
                
                // console.log(result.data)
            })
            .catch(error => console.log(error))
            
    }
    
    
    render(){
        let data;
        if(this.state.game != null){
            data = (
            <h1>{this.state.game.name}</h1>
            )
        }else{
            data = (<h1>Loading</h1>)
        }
        return ( 
            <div>
                {data}
            </div>
         );
    }
    
}
 
export default SingleProductPageClass;