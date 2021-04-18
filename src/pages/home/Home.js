import React from 'react';
import Header from '../../components/parts/header/Header'
import Footer from '../../components/parts/footer/Footer'
import Landing from '../../components/home/Landing'
import Welcome from '../../components/home/Welcome'
import Pricing from '../../components/home/Pricing'
import Subscribe from '../../components/home/Subscribe'
import Howitworks from '../../components/home/Howitworks'
import Postaproject from '../../components/home/Postaproject';

function Home(props) {
    return (
        <div>
            <Header props={props} />
            <Landing />
            <Welcome />
            <Postaproject />
            <Howitworks />
            <Pricing />
            <Subscribe />
            <Footer />
        </div>
    )
};

export default Home;