import React from 'react';
/* COMPONENTS */
import Header from '../components/Header';
import Search from '../components/Search';
/* CAROUSEL */
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

/* CSS */
import '../assets/styles/App.scss'

const App = () => (
    <div className="App">
        <Header />
        <Search />
        {/* CAROUSEL */}
        <Categories>
            <Carousel>
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
                <CarouselItem />
            </Carousel>
        </Categories>
    </div>
);
export default App;