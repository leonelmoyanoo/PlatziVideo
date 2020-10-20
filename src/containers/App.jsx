import React from 'react';
/* COMPONENTS */
import Header from '../components/Header';
import Search from '../components/Search';
/* CAROUSEL */
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
/* FOOTER */
import Footer from '../components/Footer';

/* CSS */
import '../assets/styles/App.scss'

const App = () => (
    <div className="App">
        <Header />
        <Search />

        {/* CAROUSEL */}
        <Categories title="My list">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        {/* CAROUSEL */}
        <Categories title="Trendings">
            <Carousel>
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>

        {/* CAROUSEL */}
        <Categories title="Platzi Video Originals">
            <Carousel>
                <CarouselItem />
            </Carousel>
        </Categories>

        <Footer />
    </div>
);
export default App;