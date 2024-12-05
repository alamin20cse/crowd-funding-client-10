import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampignCard from './CampignCard';


const RunningCamp = () => {

    const campigns = useLoaderData();

    // Filter campaigns to show only those with deadlines in the future
    const validCampaigns = campigns.filter(campaign => {
      const currentDate = new Date();
      const campaignDeadline = new Date(campaign.deadline);
      return campaignDeadline >= currentDate; // Keep only future deadlines
    });
    return (
        <div>
          <h1>Campaigns: {validCampaigns.length}</h1>
    
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {validCampaigns.map(campaign => (
              <CampignCard key={campaign._id} campign={campaign} />
            ))}
          </div>
        </div>
      );
};

export default RunningCamp;