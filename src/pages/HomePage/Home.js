import React from 'react';
import { InforSection, Pricing } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <div>
            <InforSection {...homeObjOne} />
            <InforSection {...homeObjThree} />
            <InforSection {...homeObjTwo} />
            <Pricing />
            <InforSection {...homeObjFour} />
        </div>
    )
}

export default Home;
