import React, { Component } from 'react';
import './gaming-site.css';
import Layout from './components/layout/Layout';
import NewReleases from './components/link-pages/new-releases/NewReleases';
import {Route, Switch, Redirect} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SingleProductPageClass from './container/single-product-page-class/SingleProductPageClass';
import Preorders from './components/link-pages/preorders/Preorders';
import PlaystationStore from './components/link-pages/ps4/PlaystationStore';
import Nintendo from './components/link-pages/nintendo/Nintendo';
import XboxOne from './components/link-pages/xbox-one/XboxOne';
import Register from './container/register-page/Register';
import LoginPage from './container/login-page/LoginPage';




class GaminSite extends Component {
    
    state = {
        auth: false
    }
    
    
    
    render(){
        return ( 
            <div className='gaming-container'>
              
                    <Navbar />
                    <Switch>
                        <Route path='/' exact component={Layout} />
                        <Route path='/home' exact component={Layout} /> 
                        <Route path="/new-releases" component={NewReleases} />
                        <Route path="/game/:id" component={SingleProductPageClass} />
                        {this.state.auth ? <Route path="/preorders" component={Preorders} />: null}
                        <Route path="/playstation-store" component={PlaystationStore} />
                        <Route path="/nintendo" component={Nintendo} />
                        <Route path='/xbox-one' component={XboxOne} />
                        <Route path='/register' component={Register} />
                        <Route path='/login'component={LoginPage} />
                        <Redirect from="/" to="/" />
                    </Switch>
                    
                    
            </div>
         );
    }
    
}
 
export default GaminSite;