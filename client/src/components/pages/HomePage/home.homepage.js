import React from 'react';
import Features from '../../features.components';
import HeroSection from '../../hero-section.components';
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjEleven} from './data'

function Home () {
    return (
        <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjThree} />
        <HeroSection {...homeObjTwo} />
        <Features />
        <HeroSection {...homeObjFour} />
        <HeroSection {...homeObjEleven} />
        </>
    );
}

export default Home;