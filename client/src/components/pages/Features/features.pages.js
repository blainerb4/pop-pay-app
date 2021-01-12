import React from 'react';
import Features from '../../features.components';
import HeroSection from '../../hero-section.components';
import {homeObjFive, homeObjNine, homeObjEight, homeObjTen} from './data.features';

function Feature () {
    return (
        <>
        <HeroSection {...homeObjFive} />
        <HeroSection {...homeObjNine} />
        <Features />
        <HeroSection {...homeObjEight} />
        <HeroSection {...homeObjTen} />
        
        </>
    );
}

export default Feature;