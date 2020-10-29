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

/* CUSTOM HOOK */
import useInitialState from "../hooks/useInitialState";

const API = "http://localhost:3000/initalState/";

const Home = () => {
    const initalState = useInitialState(API);

    return initalState.length === 0 ? <h1>Loading...</h1>:
    (
        <>
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
        </>
    )
};
export default Home;