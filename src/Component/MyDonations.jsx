import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import MyDonationCard from './MyDonationCard';

const MyDonations = () => {
  const { user } = useContext(AuthContex); // Access logged-in user from context
  const loadedDonation = useLoaderData(); // Loaded donation data from loader
  const [userDonations, setUserDonations] = useState([]);

  // Filter donations for the logged-in user
  useEffect(() => {
    if (user && loadedDonation) {
      const filteredDonations = loadedDonation.filter(
        (donation) => donation.email === user.email
      );
      setUserDonations(filteredDonations);
    }
  }, [user, loadedDonation]);

  if (!user) {
    return <span className="loading loading-spinner loading-lg"></span>; // Show spinner if user data is loading
  }

  return (
    <div className="min-h-screen bg-base-200  p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        My Donations ({userDonations.length})
      </h1>

      {userDonations.length === 0 ? (
        <p className="text-center text-gray-600">
          You have not made any donations yet.
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {userDonations.map((donation, index) => (
            <MyDonationCard key={index} donation={donation} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyDonations;
