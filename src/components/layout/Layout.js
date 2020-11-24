import React from 'react';
import Jumbotron from '../jumbotron/Jumbotron';
import Games from '../../container/Games';
import NewReleasesContainer from '../../container/NewReleasesContainer';
import ShopFormat from '../../container/ShopFormat';


const Layout = () =>{

    return(
        <div>
                <Jumbotron />
                <Games />
                <NewReleasesContainer />
                <ShopFormat />
            
            <div style={{height: '100vh', backgroundColor: '#24262c'}}></div>
        </div>
    )
}

export default Layout;