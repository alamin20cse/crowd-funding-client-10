import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContex } from './AuthProvider';
import Swal from 'sweetalert2';

const MyCampaign = () => {
  const { user } = useContext(AuthContex); // Access user from context
  const loadeddata = useLoaderData(); // Data from loader
  const [userCampaigns, setUserCampaigns] = useState([]);

  useEffect(() => {
    if (user && loadeddata) {
      const filteredCampaigns = loadeddata.filter(
        (campaign) => campaign.email === user.email
      );
      setUserCampaigns(filteredCampaigns);
    }
  }, [user, loadeddata]);

  if (!user) {
    return <h2>Loading user information...</h2>; // Handle when user data is unavailable
  }



  // delet

  const handleDelet = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {




        // delet form the database
        fetch(`http://localhost:4000/campign${id}`,
          {
            method: 'DELETE',

          }
        )
          .then(res => res.json())
          .then(data => {
            console.log('delete is done ',data)

            if (data.deletedCount) {

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

            }
          })
      }
    });

  }

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">My Campaigns</h1>

      {userCampaigns.length === 0 ? (
        <p className="text-center text-gray-600">
          You have not created any campaigns yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full bg-white shadow-lg rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Serial</th>
                <th className="px-4 py-2 text-left">Title</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 w-5 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-left">Deadline</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userCampaigns.map((campaign, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2 text-left">{index + 1}</td>
                  <td className="px-4 py-2 text-left">{campaign.title}</td>
                  <td className="px-4 py-2 text-left">
                    <img
                      src={campaign.imageUrl}
                      alt={campaign.title}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  </td>
                  <td className="px-4 py-2 text-left text-gray-600">{campaign.description}</td>
                  <td className="px-4 py-2 text-left">{campaign.deadline}</td>
                  <td className="px-4 py-2 text-left">
                  
                    <Link to={`/updatecampaigns/${campaign._id}`}>
                    <button className="btn btn-primary mr-2">Update</button>
                    
                    </Link>
                    <button onClick={() => handleDelet(campaign._id)} className="btn btn-secondary">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      )}
    </div>
  );
};

export default MyCampaign;
