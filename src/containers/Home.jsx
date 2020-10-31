import React, { useState, useEffect } from 'react';
/* REDUX */
import { connect } from 'react-redux';
/* COMPONENTS */
import Search from '../components/Search';
/* CAROUSEL */
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

/* CUSTOM HOOK */
import useInitialState from "../hooks/useInitialState";


const Home = ({ myList, trends, originals }) => {

    return (
        <>
            <Search />
            {
                myList?.length > 0 &&
                <Categories title="My list">
                    <Carousel>
                    {
                        myList?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                    </Carousel>
                </Categories>
            }

            {/* CAROUSEL */}
            <Categories title="Trendings">
                <Carousel>
                    {
                        trends?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>

            {/* CAROUSEL */}
            <Categories title="Platzi Video Originals">
                <Carousel>
                    {
                        originals?.map(item =>
                            <CarouselItem key={item.id} {...item} />
                        )
                    }
                </Carousel>
            </Categories>
        </>
    )
};
const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    }
}

export default connect(mapStateToProps, null)(Home);