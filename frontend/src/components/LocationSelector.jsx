import React from 'react';
import { useSetRecoilState } from "recoil";
import { locationAtom, showLocationsAtom } from "../atoms/locationAtoms";

const availableLocations = ["Dhalli", "BannuChack"];

export function LocationSelector() {
  const setLocation = useSetRecoilState(locationAtom);
  const setShowLocations = useSetRecoilState(showLocationsAtom);

  return (
    <div className="absolute bg-green-500 w-40 z-50 rounded-lg shadow-lg top-full left-0">
      <div  onClick={() => {
            setLocation(location=>location);
            setShowLocations(false);
          }} className='cursor-pointer text-white p-4 hover:bg-green-700 border-b-2 border-blue-500 font-bold'>
        Choose Your Location:
      </div>
      {availableLocations.map((location, index) => (
        <div
          key={location}
          onClick={() => {
            setLocation(location);
            setShowLocations(false);
          }}
          className={`cursor-pointer text-white p-4 hover:bg-green-700 ${index < availableLocations.length - 1 ? 'border-b-2 border-blue-500' : ''}`}
        >
          {location}
        </div>
      ))}
    </div>
  );
}
