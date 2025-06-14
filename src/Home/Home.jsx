import React from 'react';
import Slider from './Slider';
import InfoSection from './InfoSection';
import MarathonFAQ from './MarathonFAQ';
import MarathonCards from './MarathonCards ';

const Home = () => {
    return (
        <div>
           <Slider></Slider>
           <MarathonCards></MarathonCards>
           <InfoSection></InfoSection>
           <MarathonFAQ></MarathonFAQ>
        </div>
    );
};

export default Home;