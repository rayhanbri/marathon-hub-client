import React from 'react';
import Slider from './Slider';
import InfoSection from './InfoSection';
import MarathonFAQ from './MarathonFAQ';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <InfoSection></InfoSection>
           <MarathonFAQ></MarathonFAQ>
        </div>
    );
};

export default Home;