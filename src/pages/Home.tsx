import React from 'react'
import {
    Container
} from 'semantic-ui-react';
import DetailComponent from '../components/Home/DetailComponent';
import Jumbotron from '../components/Home/Header';

const Home = () => {

    return(   
    <div className="page">
        <Jumbotron />
        <section>
          <DetailComponent reversed={true}/>
          <DetailComponent reversed={false}/>
          <DetailComponent reversed={true}/>
        </section>

    </div>);
}

export default Home;