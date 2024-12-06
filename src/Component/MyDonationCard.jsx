import e from 'cors';
import React from 'react';

const MyDonationCard = ({donation}) => {

    const {email,displayName,imageUrl,title,description,type,minDonation, deadline,name}=donation

    return (
        <div className="card bg-base-100  shadow-xl">
  <figure className='h-[150px]'>
    <img src={imageUrl} className='w-full h-full rounded-md'
      
      alt={title} />

  </figure>
  <div className="">
    <h2 className="card-title">
      {title}
      
    </h2>
    <h2 className='text-start'>Name:{name}</h2>
    <p className='text-start text-gray-400'>{description}</p>
    <p className='text-start font-bold'>Amount:${minDonation}</p>
    <h1 className='text-start'>TYPE: {type}</h1>
    <div className="card-actions ">
      <div className="text-xl">{email}</div>
      <div className="font-bold">{displayName}</div>

      
    </div>

    <div className='bg-lime-700 rounded-2xl'>
        <p className='text-xl font-bold py-4 px-4'>DeadLine: {deadline}</p>
      </div>
  </div>
</div>
    );
};

export default MyDonationCard;