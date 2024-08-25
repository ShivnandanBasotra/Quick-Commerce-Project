import React from 'react';
import { useRecoilState, useRecoilValue } from "recoil";
import { locationAtom, showLocationsAtom } from "../atoms/locationAtoms";
import { LocationSelector } from "./LocationSelector"; 
import searchImg from "../assets/searchIcon.png";
import cartBlackImg from "../assets/cart.png";
import heartBlackImg from "../assets/heartBlack.png";
import notificationBellBlack from "../assets/bellBlack.png";
import locationIconGreen from "../assets/locationIconGreen.png";
import maleProfileImg from "../assets/profileMale.png";
import locationIcon from "../assets/locationIcon.png";

export function Header() {
  const location = useRecoilValue(locationAtom);
  const [showLocations, setShowLocations] = useRecoilState(showLocationsAtom);

  return (
    <div className="flex h-24 justify-between bg-white p-4 rounded-b-3xl items-center sticky top-0 z-40 shadow-md">
      <div className="flex gap-5 items-center relative">
        <h1 className="text-3xl font-bold ">Sabzi Mandi</h1>
        
        <div className="relative">
          {!showLocations && location && (
            <button
              onClick={() => setShowLocations((prev) => !prev)}
              className="border-2 hover:border-black border-transparent text-slate-600 text-lg"
            >
              <div className="font-medium text-green-700">
                Delivering to {location} 184144
              </div>
              <div className="flex items-center justify-start font-bold">
                <img className="h-5" src={locationIcon} alt="location" />
                <span>Change Address</span>
              </div>
            </button>
          )}
          
          {!showLocations && !location && (
            <button
              onClick={() => setShowLocations((prev) => !prev)}
              className="border-2 border-green-500 px-2 py-1 rounded-xl text-green-500 text-lg"
            >
              <div className="flex items-center justify-start font-semibold">
                <img className="h-5" src={locationIconGreen} alt="location" />
                <span>Add your Address</span>
              </div>
            </button>
          )}

          {showLocations && <LocationSelector />}
        </div>
      </div>
      
      <div className="flex w-8/12 items-center gap-4">
        <div className="flex items-center relative w-full">
          <input
            className="w-full border-2 border-slate-200 rounded-3xl font-normal text-lg placeholder:font-semibold placeholder:text-lg placeholder:text-slate-300 bg-slate-50 h-12 p-4 pr-12"
            type="text"
            placeholder="Search items or categories"
          />
          <button className="absolute right-0 top-0 bottom-0 bg-green-500 rounded-r-3xl p-2">
            <img className="h-full" src={searchImg} alt="search Icon" />
          </button>
        </div>
        <div className="p-3 cursor-pointer border border-slate-400 rounded-full ">
          <img className="w-8" src={cartBlackImg} alt="cart" />
        </div>
        <div className="p-3 cursor-pointer border border-slate-400 rounded-full r">
          <img className="w-8" src={heartBlackImg} alt="heart" />
        </div>
        <div className="p-3 cursor-pointer border border-slate-400 rounded-full ">
          <img className="w-8" src={notificationBellBlack} alt="notification bell" />
        </div>
        <div className="cursor-pointer">
          <img className="w-20" src={maleProfileImg} alt="profile" />
        </div>
      </div>
    </div>
  );
}
