import React from 'react';
import './cards.css';
import Card from './card/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const Cards = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1
      };

      let slider;
      if(props.games.length > 0){
        slider = (
          <Slider {...settings} className='slider'>

            {props.games.map(elem =>{
                return (<Link to={`/game/${elem.id}`} key={elem.id}><Card 
                        name={elem.name}
                        image={elem.background_image}/></Link>)
            })}

          </Slider>
        )
      }else{
        slider = (<h1>Looading...</h1>)
      }
    
      return (
        <div>
          
          <div className='cards-container'>
              
            {slider}
          </div>
        </div> 
     );
}
 
export default Cards;