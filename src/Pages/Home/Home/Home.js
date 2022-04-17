import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Plans from '../Plans/Plans';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Courses></Courses>
            <Plans></Plans>
        </div>
    );
};

export default Home;