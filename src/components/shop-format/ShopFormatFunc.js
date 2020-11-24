import React, { useState } from 'react';
import './shop-format.css';
import PlayStationFormat from './playstation-format/PlayStationFormat';
import XboxFormat from './xbox-format/XboxFormat';
import NintendoFormat from './nintendo-format/NintednoFormat';
import ShopFormatButtons from './shop-format-buttons/ShopFormatButtons';
import ViewMoreButton from '../../UI/view-more-button/ViewMoreButton';


function ShopFormatFunc(props){
    let playStationArr;
        playStationArr = props.data.playstation
 
    const [format, setFormat] = useState(<PlayStationFormat data = {playStationArr}/>)
    const [styleButton, setStyle] = useState(false)

    const showPlaystation = () =>{
        setFormat(<PlayStationFormat data = {playStationArr}/>)
        setStyle(true)
    }
    
    const showXbox = () =>{
        setFormat(<XboxFormat data = {props.data.xBox}/>)
    }

    const showNintendo = () =>{
        setFormat(<NintendoFormat data = {props.data.nintendo}/>)
    }    
    
    return (  
            <div className='shop-format-func-container'>
                <div className='shop-format-buttons'>
                    <ShopFormatButtons 
                        playstation={showPlaystation}
                        xBox={showXbox}
                        nintendo={showNintendo}
                        styled={styleButton}/>
                </div>
                <div className='format-text'>
                    <p>Nulla voluptate dolor laborum nulla reprehenderit. Duis excepteur incididunt incididunt ea. 
                        Aute commodo id aliquip culpa.</p>
                    <ViewMoreButton class='view-more-format'/>
                </div>
                
                <div className='shop-formats'>
                    {format}
                    
                </div>
                       
            </div>
        );  
}
 
export default ShopFormatFunc;


 {/* <p onClick={showPlaystation}>sPlaystation</p>
                        <p onClick={showXbox}>xBox</p>
                        <p onClick={showNintendo}>Nintendo</p> */}