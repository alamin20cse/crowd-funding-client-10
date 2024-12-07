import React from 'react';
import { NavLink } from 'react-router-dom';

const CampignCard = ({ campign }) => {
  const { imageUrl, title, type, description, minDonation, deadline, _id } = campign;

  return (
    <div className="card card-compact bg-base-100 border-2 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </figure>
      <div className="p-4">
        <h2 className="card-title">{title}</h2>
        <p>Type: {type}</p>
        <p className="text-gray-400">Description: {description}</p>
        <p>Min Donation: ${minDonation}</p>
        <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
        <div className="card-actions justify-end mt-4">
          <NavLink to={`/details/${_id}`} className="btn btn-primary">
            See More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CampignCard;
