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

const API = "http://localhost:3000/initalState";

const App = () => {
    const [ videos, setVideos ] = useState([]);

    useEffect(()=>{
        fetch(API)
        .then(response=>response.json()) /* TRANSFORMO LA DATA A JSON */
        .then(data=>setVideos(data))
    },[]);
    console.log(videos);

    return (
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
    )
};
export default App;