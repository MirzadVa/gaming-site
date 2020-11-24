import React from 'react';
import Card from './card/Card';
import './slider.css';
import SliderFormat from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Slider = (props) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 3
      };
      
    return ( 
        <div className='playstation-slider-format-container'>
            <SliderFormat {...settings} className={props.class}>
                {props.data.games.map(elem =>{
                    return <Card name={elem.name} key={elem.id} image={props.data.image} banner={props.banner} topBannerClass={props.topBannerClass}/>
                })}
            </SliderFormat>
            
            
        </div>
     );
}
 
export default Slider;