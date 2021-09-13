import React from 'react';
import { InforSection } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <div>
            <InforSection {...homeObjOne} />
            <InforSection {...homeObjThree} />
            <InforSection {...homeObjTwo} />
            <InforSection {...homeObjFour} />
        </div>
    )
}

export default Home;
