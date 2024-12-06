import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
  // Load campaigns and initialize state
  const loadedCampaigns = useLoaderData();
  const [campaigns, setCampaigns] = useState(loadedCampaigns);

  // Sort functionality
  const sortCampaignsByMinDonation = () => {
    const sorted = [...campaigns].sort((a, b) => a.minDonation - b.minDonation);
    setCampaigns(sorted);
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between my-5">
        <h1 className="text-xl font-bold mb-4">All Campaigns: {campaigns.length}</h1>
        <button className="btn btn-primary" onClick={sortCampaignsByMinDonation}>
          Sort by Minimum Donation
        </button>
      </div>

      {/* Campaigns Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Serial</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Image</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Title</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Amount</th>
              <th className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">Name</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Action</th>
              <th className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">Deadline</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {campaigns.map((campaign, indx) => (
              <tr key={campaign._id || indx} className="border-t">
                <th className="text-sm lg:text-base md:text-sm sm:text-xs">{indx + 1}</th>
                <td>
                  <img
                    className="rounded-full h-10 w-10"
                    src={campaign.imageUrl}
                    alt={campaign.title}
                  />
                </td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campaign.title}</td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campaign.minDonation}</td>
                <td className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">{campaign.name}</td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">
                  <NavLink className="btn btn-primary" to={`/details/${campaign._id}`}>
                    See More
                  </NavLink>
                </td>
                <td className="text-sm hidden lg:table-cell lg:text-base md:text-sm sm:text-xs">
                  {campaign.deadline}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
