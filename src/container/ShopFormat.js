import Axios from 'axios';
import React, { Component } from 'react';
import ShopFormatFunc from '../components/shop-format/ShopFormatFunc';


class ShopFormat extends Component {

    state = {
            consoles : {
                playstation : null,
                xBox : null,
                nintendo : null
                
            },
            dataLoaded: false

    }
    

    componentDidMount(){
        let playstationArray = {
            games : [],
            image: ''
        };
        let xBoxArray= {
            games : [],
            image: ''
        };
        let nintendoArray= {
            games : [],
            image: ''
        };


        Axios.get('https://api.rawg.io/api/platforms')
            .then(response =>{
                response.data.results.map(elem =>{
                    if(elem.name === 'PlayStation 5'){
                        playstationArray = {
                            games : elem.games,
                            image : elem.image_background
                        }
                    }else if(elem.name === 'Xbox One'){
                        xBoxArray = {
                            games : elem.games,
                            image : elem.image_background
                        }
                    }else if(elem.name === 'Nintendo Switch'){
                        nintendoArray = {
                            games : elem.games,
                            image : elem.image_background
                        }
                    }
                    
                })
                this.setState({
                    consoles : {
                        playstation: playstationArray,
                        xBox : xBoxArray,
                        nintendo : nintendoArray,
                        
                    },
                    dataLoaded: true
                })
                
            })
            .catch(error =>{
                console.log(error)
            })
    }
    
    
    
    render(){
        let shopFormat;
        if(this.state.dataLoaded){
            shopFormat = (
                <ShopFormatFunc data={this.state.consoles} />
            )
        }else {
            shopFormat = (<h1>Data Loading</h1>)
        }
        
        return(
            <div>
                {shopFormat}
                
            </div>
        )
    }
}


export default ShopFormat;