import React, { useState } from "react";

const ProfileUpdatePage = () => {
  const [address, setAddress] = useState("");
  const [pastRentalHistory, setPastRentalHistory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update profile API call
  };

  return (
    <div className="bg-gray-200 h-screen p-4 md:p-6 lg:p-12">
      <div className="container mx-auto p-4 md:p-6 lg:p-12">
        <h2 className="text-lg font-bold mb-4">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <label className="block mb-2 text-gray-700" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
                placeholder="Enter your address"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-4 mb-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <label
                className="block mb-2 text-gray-700"
                htmlFor="pastRentalHistory"
              >
                Past Rental History
              </label>
              <textarea
                id="pastRentalHistory"
                value={pastRentalHistory}
                onChange={(event) => setPastRentalHistory(event.target.value)}
                className="w-full p-2 pl-10 text-sm text-gray-700"
                placeholder="Enter your past rental history"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-400  text-white font-bold py-2 px-4 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
