import React from 'react';

const CampignCard = ({campign}) => {

    const {imageUrl,title,type,description,
        minDonation,deadline,email,name}=campign;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <img
      src={imageUrl}
      alt={title} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{type}</p>
    <p>{description}</p>
    <p>{name}</p>
    <p>{email}</p>
    <p>{email}</p>
    <p>{minDonation}</p>
    <p>{deadline}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default CampignCard;