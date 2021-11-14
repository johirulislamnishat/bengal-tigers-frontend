import React from 'react';
import Footer from './Footer';
import Specialities from './Specialities';
import InfoGraphic01 from './InfoGraphic01';
import Blogs from './Blogs';
import ProductHome from './ProductHome';
import Teams from './Teams';
import CountDown from './CountDown';
import Subscribe from './Subscribe';
import Banner from './Banner';
import Testimonial from './Testimonial';
import Header from './Header';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <CountDown />
            <Specialities />
            <ProductHome />
            <InfoGraphic01 />
            <Subscribe />
            {/* <Teams /> */}
            <Testimonial />
            {/* <Blogs /> */}
            <Footer />
        </>
    );
};

export default Home;