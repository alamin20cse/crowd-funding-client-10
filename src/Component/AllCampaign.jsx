import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CampignCard from './CampignCard';

const AllCampaign = () => {
    const campigns=useLoaderData();
    return (
        <div>
            <h1>Campign : {campigns.length}</h1>

          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
          {
                campigns.map(campign=><CampignCard key={campign._id} campign={campign}></CampignCard>)
            }
          </div>
            
        </div>
    );
};

export default AllCampaign;