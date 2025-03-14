import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import CampignCard from './CampignCard';
import { AuthContex } from './AuthProvider';

const RunningCamp = () => {
  const campigns = useLoaderData();
  const { loading } = useContext(AuthContex);

  // Filter campaigns to show only those with deadlines in the future
  const validCampaigns = campigns.filter(campaign => {
    const currentDate = new Date();
    const campaignDeadline = new Date(campaign.deadline);
    return campaignDeadline >= currentDate; // Keep only future deadlines
  });

  // Limit to 6 campaigns
  const limitedCampaigns = validCampaigns.slice(0, 6);

  return (
    <div>
      <h1>Campaigns: {limitedCampaigns.length}</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {limitedCampaigns.map(campaign => (
          <CampignCard key={campaign._id} campign={campaign} />
        ))}
      </div>
    </div>
  );
};

export default RunningCamp;
