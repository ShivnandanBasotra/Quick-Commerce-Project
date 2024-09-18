import { useRecoilValue, useSetRecoilState } from "recoil";
import { locationAtom, savedLocationsAtom, showLocationsAtom } from "../../atoms/locationAtoms";
import locationIconImg from '../../assets/locationIconGreen.png'
import { useState } from "react";

const LocationSelector = () => {
  const setLocation = useSetRecoilState(locationAtom);
  const setShowLocations = useSetRecoilState(showLocationsAtom);
  const savedLocations = useRecoilValue(savedLocationsAtom);
  const [inputText, setInputText] = useState("");
  return (
      <div className="min-h-96 fixed w-96  left-40 top-20 z-30 bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Add New Location:</h2>
          <button onClick={() => { setLocation(location => location); setShowLocations(false); }} className="text-gray-500 hover:text-gray-700 font-extrabold">
            ✕
          </button>
        </div>

        <div className=" mb-4">
          <input
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            type="text"
            placeholder="Enter your Address"
            className="w-full pl-3 pr-4 py-2 font-medium border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>

        <button onClick={() => setLocation(inputText)} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition duration-300 mb-4">
          Add Location
        </button>

        <h3 className="text-lg font-bold mb-2">Select from saved address:</h3>

        <div>
          {
            savedLocations.map((location, index) => {
              return (
                <div key={location} onClick={() => {setLocation(location); setShowLocations(false)}} className="p-3 flex flex-col cursor-pointer hover:bg-slate-100">
                  <p className="font-bold">Address {index + 1}</p>
                  <div className='flex items-center gap-2'>
                    <img src={locationIconImg} alt="" className='w-6' />
                    <p className="text-sm text-slate-400 font-medium">{location}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
  );
};

export default LocationSelector;
