import React, { useContext, useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import Swal from 'sweetalert2';

const Details = () => {
  const { _id } = useParams();  // Access the campaign ID from the URL
  const initialData = useLoaderData();  // Fetch campaign details based on the ID
  const [campaign, setCampaign] = useState(null);  // Initialize campaign state as null



  const {user}=useContext(AuthContex);

  useEffect(() => {
    document.title = 'Campaign Details';
    
    // Debugging initialData
    // console.log('Initial data:', initialData);

    // If initialData is invalid, fetch all campaigns
    if (!initialData || !Array.isArray(initialData)) {
      console.log('Fetching all campaigns from server');
      
      fetch('http://localhost:4000/campign')  // Fetch all campaigns
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(fetchedData => {
          console.log('Fetched data:', fetchedData);  // Log the fetched data
          
          // Filter the campaign with the matching _id
          const campaignData = fetchedData.find(item => item._id === _id);
          setCampaign(campaignData);  // Set the campaign data
        })
        .catch(error => {
          console.error('Error fetching campaign details:', error);
        });
    } else {
      // Set initialData if available
      const campaignData = initialData.find(item => item._id === _id);
      setCampaign(campaignData);
    }
  }, [_id, initialData]);  // Depend on _id and initialData for re-fetching

  // Show loading message if data is not yet available
  if (!campaign) {
    return <h2>Loading...</h2>;
  }

  // Destructure campaign details
  const { imageUrl, title, type, description, minDonation, deadline, email, name } = campaign;
  // console.log(campaign);



  // handel donate buttn
  const handelDonate=e=>{
    e.preventDefault();
    
    const userobj = {
      email: user.email,
      displayName: user.displayName,
      imageUrl,        
      title,
      type,
      description,
      minDonation,
      deadline,
      name,

    };

    // console.log(userobj); 
          //   send data to the server 
          fetch('http://localhost:4000/donatedcollection',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userobj),



        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);


            Swal.fire({
                title: "Donated",
                text: "Successfully Donated",
                icon: "success"
              });
        })

  }

  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
  <figure className="relative h-60">
    <img
      src={imageUrl}
      alt={title}
      className="object-cover w-full h-full rounded-t-lg"
    />
  </figure>
  <div className="p-6 space-y-4">
    <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
    <p className="text-lg text-gray-600">{type}</p>
    <p className="text-sm text-gray-500">{description}</p>
    <div className="space-y-1">
      <p className="text-base font-medium text-gray-700">Campaign Organizer: {name}</p>
      <p className="text-base text-gray-700">Contact: {email}</p>
      <p className="text-base text-gray-700">Minimum Donation: ${minDonation}</p>
      <p className="text-base text-gray-700">Deadline: {deadline}</p>
      <p>{_id}</p>
    </div>
    <div className="mt-4 flex justify-end">
      <button onClick={handelDonate} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Donate Now
      </button>
    </div>
  </div>
</div>

  );
};

export default Details;
