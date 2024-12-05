import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCampaign = () => {
  const loadedCampigns = useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Campaigns: {loadedCampigns.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* Table Head */}
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Serial</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Image</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Title</th>
              <th className="text-left lg:text-sm md:text-xs sm:text-[10px]">Name</th>
              <th className="text-left hidden lg:table-cell lg:text-sm md:text-xs sm:text-[10px]">Deadline</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {loadedCampigns.map((campign, indx) => (
              <tr key={campign._id || indx} className="border-t">
                <th className="text-sm lg:text-base md:text-sm sm:text-xs">{indx + 1}</th>
                <td>
                  <img
                    className="rounded-full  h-10 w-10"
                    src={campign.imageUrl}
                    alt={campign.title}
                  />
                </td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campign.title}</td>
                <td className="text-sm lg:text-base md:text-sm sm:text-xs">{campign.name}</td>
                <td className="text-sm hidden lg:table-cell lg:text-base md:text-sm sm:text-xs">{campign.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllCampaign;
