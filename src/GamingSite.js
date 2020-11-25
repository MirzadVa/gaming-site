import React from 'react';
import './gaming-site.css';
import Layout from './components/layout/Layout';
import NewReleases from './components/link-pages/new-releases/NewReleases';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SingleProductPageClass from './container/single-product-page-class/SingleProductPageClass';
import Preorders from './components/link-pages/preorders/Preorders';
import PlaystationStore from './components/link-pages/ps4/PlaystationStore';
import Nintendo from './components/link-pages/nintendo/Nintendo';
import XboxOne from './components/link-pages/xbox-one/XboxOne';



const GaminSite = (props) => {
    return ( 
        <div className='gaming-container'>
          
                <Navbar />
                <Switch>
                    <Route path='/' exact component={Layout} />
                    <Route path="/new-releases" component={NewReleases} />
                    <Route path="/game/:id" component={SingleProductPageClass} />
                    <Route path="/preorders" component={Preorders} />
                    <Route path="/playstation-store" component={PlaystationStore} />
                    <Route path="/nintendo" component={Nintendo} />
                    <Route path='/xbox-one' component={XboxOne} />
                </Switch>
                
                
        </div>
     );
}
 
export default GaminSite;