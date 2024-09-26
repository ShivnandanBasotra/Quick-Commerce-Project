import React from "react";
import { useRecoilState } from "recoil";
import { savedLocationsAtom } from "../../atoms/locationAtoms";
import pencilIconImg from "../../assets/pencilIcon.png"
import deleteImg from "../../assets/delete.png"

const ProfilePage = () => {
  const [savedLocations, setSavedLocations] = useRecoilState(savedLocationsAtom)
  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto bg-slate-100 mt-4 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="w-full lg:w-1/2 p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Update Profile</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Gmail</label>
              <input type="email" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="number" className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-green-500" />
            </div>

            <button type="submit" className="w-full font-semibold bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 focus:outline-none focus:ring-1 focus:ring-green-500" >
              Save Changes
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Locations</h2>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">New Address</label>
            <input
              type="text"
              placeholder="Enter address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
            <div className="flex justify-end mt-3">
              <button className="bg-green-500 text-white rounded-lg py-2 px-4 hover:bg-green-600 transition duration-300 flex items-center">
                + Add Address
              </button>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-4 text-gray-700">Saved Addresses</h3>

          <div className="space-y-4">
            {savedLocations.map((location) => (
              <div key={location} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition duration-300">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-full sm:w-9/12 mb-2 sm:mb-0">
                    <label className="cursor-pointer" htmlFor={location}>
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          id={location}
                          name="default-location"
                          className="form-radio h-5 w-5 text-green-600 transition duration-150 ease-in-out"
                        />
                        <div>
                          <p className="text-sm text-gray-600 mt-1">{location}</p>
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button>
                      <img src={pencilIconImg} alt="" className="w-4" />
                    </button>
                    <button>
                      <img src={deleteImg} alt="" className="w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;