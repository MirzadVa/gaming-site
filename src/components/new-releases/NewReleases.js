import React from 'react';
import './new-releases.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ReleaseCard from './release-card/ReleaseCard';
import ViewMoreButton from '../../UI/view-more-button/ViewMoreButton';
import { Link } from 'react-router-dom';


const NewReleases = (props) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1
      };

      let releaseCard;

      if(props.games.length > 0) {
          releaseCard = (
                
                <Slider {...settings} className='releases-slider'>
                
                {props.games.map(game => {
                    return (<Link style={{ textDecoration: 'none' }} key={game.id} to={`/game/${game.id}`}>
                    <ReleaseCard
                                id={game.id} 
                                name={game.name}
                                image={game.background_image}
                                description='Aliquip fugiat officia irure occaecat reprehenderit sint in occaecat occaecat.'/>
                            </Link> )
                })}
            </Slider>
            
          )
         
      }else{
          releaseCard = (<h1>Loading</h1>)
      }


    return ( 
        <div>
            <div className='new-releases-container'>
                <p className='new-releases-headline'>New releases</p>
                <Link to='/new-releases'>
                    <ViewMoreButton class="view-more-releases"/>
                </Link>
                
               {releaseCard}
            </div>
        </div>
     );
}
 
export default NewReleases;