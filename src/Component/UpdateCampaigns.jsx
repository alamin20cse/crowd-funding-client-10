import React, { useContext } from 'react';
import { AuthContex } from './AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCampaigns = () => {
  const { user } = useContext(AuthContex);
  const loadedCampaigns = useLoaderData(); // Fetch the data provided by the loader
  const { _id } = loadedCampaigns; // Ensure `_id` is available
  const navigate = useNavigate();

  const handelupdate = (e) => {
    e.preventDefault();
    const imageUrl = e.target.imageUrl.value;
    const title = e.target.title.value;
    const type = e.target.type.value;
    const description = e.target.description.value;
    const minDonation = e.target.minDonation.value;
    const deadline = e.target.deadline.value;

    const updateCampaign = {
      imageUrl,
      title,
      type,
      description,
      minDonation,
      deadline,
      email: user?.email,
      name: user?.displayName,
    };

    fetch(`https://crowd-funding-10-server.vercel.app/campign/${_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateCampaign),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Updated',
            text: 'Successfully updated the campaign',
            icon: 'success',
          });
          navigate('/mycampaign');
        }
      })
      .catch((err) => {
        console.error('Error updating campaign:', err);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update the campaign. Please try again.',
          icon: 'error',
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handelupdate}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Update Campaign</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={loadedCampaigns.imageUrl}
            placeholder="Enter image URL"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Campaign Title</label>
          <input
            type="text"
            name="title"
            defaultValue={loadedCampaigns.title}
            placeholder="Enter campaign title"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Campaign Type</label>
          <select
            name="type"
            defaultValue={loadedCampaigns.type}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Description</label>
          <textarea
            name="description"
            defaultValue={loadedCampaigns.description}
            placeholder="Enter campaign description"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Minimum Donation Amount</label>
          <input
            type="number"
            name="minDonation"
            defaultValue={loadedCampaigns.minDonation}
            placeholder="Enter minimum donation amount"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Deadline</label>
          <input
            type="date"
            name="deadline"
            defaultValue={loadedCampaigns.deadline}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateCampaigns;
