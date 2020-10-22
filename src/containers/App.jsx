import React, { useState, useEffect } from 'react';
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
/* CUSTOM HOOK */
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState/";

const App = () => {
    const initalState = useInitialState(API);

    return (
        <div className="App">
            <Header />
            <Search />
            {
                initalState.mylist?.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            {/* CAROUSEL */}
            <Categories title="Trendings">
                <Carousel>
                    {
                        initalState.trends?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            {/* CAROUSEL */}
            <Categories title="Platzi Video Originals">
                <Carousel>
                    {
                        initalState.originals?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            <Footer />
        </div>
    )
};
export default App;