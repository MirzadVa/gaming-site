import Axios from 'axios';
import React, { Component } from 'react';
import SingleProductPageFunc from '../../components/single-product-page-func/SingleProductPageFunc';

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
            })
            .catch(error => console.log(error))
            
    }
    
    
    render(){
        let data;
        if(this.state.game != null){
            data = (
                <h1><SingleProductPageFunc data={this.state.game}/></h1>
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