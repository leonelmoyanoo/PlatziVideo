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
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });

    useEffect(() => {
        fetch(API)
            .then(response => response.json()) /* TRANSFORMO LA DATA A JSON */
            .then(data => setVideos(data))
    }, []);

    return (
        <div className="App">
            <Header />
            <Search />
            {
                videos.mylist.length > 0 &&
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
                        videos.trends.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            {/* CAROUSEL */}
            <Categories title="Platzi Video Originals">
                <Carousel>
                    {
                        videos.originals.map(item =>
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