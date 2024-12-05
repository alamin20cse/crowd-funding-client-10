import React from 'react';
import Bannar from './Bannar';
import ExtraSection from './ExtraSection';
import AllCampaign from './AllCampaign';
import RunningCamp from './RunningCamp';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <RunningCamp></RunningCamp>


            <ExtraSection></ExtraSection>
            
        </div>
    );
};

export default Home;