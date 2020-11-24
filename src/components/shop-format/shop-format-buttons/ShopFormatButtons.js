import React, {useState} from 'react';
import './shop-format-buttons.css';
import PsStore from '../../../assets/images/ps-store.png'
import XboxLogo from '../../../assets/images/xbox-logo.png'
import NintenoLogo from '../../../assets/images/nintendo.png'

const ShopFormatButtons = (props) => {
    const [OpacityPlay, setOpacityPlay] = useState(true)
    const [OpacityxBox, setOpacityxBox] = useState(false)
    const [OpacityNintendo, setOpacityNintendo] = useState(false)
    
    const opacityPlay = () =>{
        setOpacityPlay(true)
        setOpacityNintendo(false)
        setOpacityxBox(false)
    }
    const opacityXbox = () =>{
        setOpacityPlay(false)
        setOpacityNintendo(false)
        setOpacityxBox(true)
    }
    const opacityNintendo= () =>{
        setOpacityPlay(false)
        setOpacityNintendo(true)
        setOpacityxBox(false)
    }
    
    const style = {
        opacity : '1'
    }
    
    return ( 


        <div className='btn-container'>
                    <div onClick={props.playstation} className='format-button'>
                        <img src={PsStore} className='ps-store-img'/>
                        <span className='playstation-store' style={OpacityPlay ? style : null} onClick={opacityPlay}>PlayStation </span><span className='store'> Store</span>
                    </div>
                    
                    
                    <div onClick={props.xBox} className='format-button'>
                        <img src={XboxLogo} className='xbox-logo-img'/>
                        <span className='xbox-name' style={OpacityxBox ? style : null} onClick={opacityXbox}>XBOX</span>
                    </div>
                    
                    
                    <div onClick={props.nintendo} className='format-button'>
                        <img src={NintenoLogo} className='nintedno-logo-img' style={OpacityNintendo ? style : null} onClick={opacityNintendo}/>
                    </div>
        </div>
     );
}
 
export default ShopFormatButtons;


