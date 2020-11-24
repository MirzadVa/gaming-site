import React from 'react';
import './gaming-site.css';
import Layout from './components/layout/Layout';
import NewReleases from './components/link-pages/new-releases/NewReleases';
import {Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SingleProductPageClass from './container/single-product-page-class/SingleProductPageClass';


const GaminSite = (props) => {
    return ( 
        <div className='gaming-container'>
          
                <Navbar />
                <Route path='/' exact component={Layout} />
                <Route path="/new-releases" component={NewReleases} />
                <Route path="/game/:id" component={SingleProductPageClass} />
                
        </div>
     );
}
 
export default GaminSite;