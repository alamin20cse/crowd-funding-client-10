import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const CampignCard = ({ campign }) => {
  const { imageUrl, title, type, description, minDonation, deadline, email, name, _id } = campign;
  const navigate = useNavigate();


  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{type}</p>
        <p>{description}</p>
        <p>{name}</p>
        <p>{email}</p>
        <p>{minDonation}</p>
        <p>{deadline}</p>
        <p>{_id}</p>
        <div className="card-actions justify-end">
          
        
        <NavLink className='btn btn-primary' to={`/details/${_id}`}>See More</NavLink>

        </div>
      </div>
    </div>
  );
};

export default CampignCard;
