import React, { useState, useEffect } from 'react';
import RcIf, { RcElse } from 'rc-if';
// Components
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer/Footer';
// Hook
import useInitialState from '../hooks/useInitialState';
// Style
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const App = () => {
    const initialState = useInitialState(API);
    return (
        <div className="app">
            <Header />
            <Search />
            <RcIf if={initialState.mylist.length > 0}>
                <Categories title="Mi Lista" >
                    <Carousel>
                        <CarouselItem />
                    </Carousel>
                </Categories>
            </RcIf>
            <Categories title="Tendencias" >
                <Carousel>
                    {initialState.trends.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Categories title="Originales" >
                <Carousel>
                    {initialState.originals.map(item =>
                        <CarouselItem key={item.id} {...item} />
                    )}
                </Carousel>
            </Categories>
            <Footer />
        </div>
    );
};

export default App;
