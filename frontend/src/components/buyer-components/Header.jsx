import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { locationAtom, showLocationsAtom } from "../../atoms/locationAtoms";
import searchImg from "../../assets/searchIcon.png";
import cartBlackImg from "../../assets/cart.png";
import heartBlackImg from "../../assets/heartBlack.png";
import notificationBellBlack from "../../assets/bellBlack.png";
import locationIconGreen from "../../assets/locationIconGreen.png";
import locationIconRed from "../../assets/locationIconRed.png";
import maleProfileImg from "../../assets/profileMale.png";
import isNotificationVisibleAtom from '../../atoms/notificationsAtom';
import isProfileVisibleAtom from '../../atoms/profileAtom';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Header() {
  const navigate = useNavigate();
  const location = useRecoilValue(locationAtom);
  const setIsNotificationsVisible = useSetRecoilState(isNotificationVisibleAtom);
  const setIsProfileVisible = useSetRecoilState(isProfileVisibleAtom)
  const [showLocations, setShowLocations] = useRecoilState(showLocationsAtom);

  return (
    <>
      <div className="bg-blue-200 sm:bg-red-100 md:bg-green-100 lg:bg-yellow-100 xl:bg-violet-100 flex flex-col sm:flex-row sm:h-auto md:h-auto lg:h-24 justify-between bg-white p-2 sm:p-3 md:p-4 rounded-b-xl sm:rounded-b-2xl md:rounded-b-3xl items-center sticky top-0 z-10 shadow-md">
        <div className="hidden sm:flex flex-col sm:flex-row items-center sm:items-start md:items-center relative w-full sm:w-auto mb-2 sm:mb-0">
          <div onClick={()=>{navigate('/')}} className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer mb-2 sm:mb-0 flex items-center">
            <span>Sabzi</span>
            <span className="ml-1">Mandi</span>
          </div>

          <div className="relative mt-2  sm:mt-0 sm:ml-2 md:ml-4 flex justify-center w-full sm:w-auto">
            {!showLocations && location && (
              <button
                onClick={() => setShowLocations((prev) => !prev)}
                className="border-2 hover:border-red-400 border-transparent text-red-600 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap"
              >
                  <div className="flex items-center justify-start font-semibold">
                    <img className="h-3 sm:h-4 md:h-5 mr-1" src={locationIconRed} alt="location" />
                    <span>Change Address</span>
                  </div> 
                  <div className="font-medium text-green-700 text-xxs sm:text-xs truncate xl:max-w-64 lg:max-w-48 max-w-36">
                    {location}
                  </div>
              </button>
            )}

            {!showLocations && !location && (
              <button
                onClick={() => setShowLocations((prev) => !prev)}
                className="border-2 border-green-500 px-1 sm:px-2 py-1 rounded-lg sm:rounded-xl text-green-500 text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap sm:min-w-28 md:min-w-32"
              >
                <div className="flex items-center justify-start font-semibold">
                  <img className="h-3 sm:h-4 md:h-5 mr-1" src={locationIconGreen} alt="location" />
                  <span>Add Address</span>
                </div>
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-row w-full sm:w-9/12 md:w-8/12 items-center justify-between sm:justify-start gap-2 sm:gap-3 md:gap-4">
          <div className="flex items-center relative w-full sm:w-8/12 md:w-9/12 lg:w-10/12">
            <input
              className="w-full border-2 border-slate-200 rounded-2xl sm:rounded-3xl font-normal text-sm sm:text-base  placeholder:font-semibold placeholder:text-xs sm:placeholder:text-sm  lg:placeholder:text-lg placeholder:text-slate-300 bg-slate-50 h-8 sm:h-10  p-1 sm:p-1 pr-8 sm:pr-10"
              type="text"
              placeholder="Search items or categories"
            />
            <button className="absolute right-0 top-0 bottom-0 bg-green-500 rounded-r-2xl sm:rounded-r-3xl p-1 sm:p-2">
              <img onClick={() => { navigate('/') }} className="h-full" src={searchImg} alt="search Icon" />
            </button>
          </div>
          <div onClick={() => { navigate('/buyer/cart') }} className="sm:hidden p-2 cursor-pointer">
            <img className="w-6" src={cartBlackImg} alt="cart" />
          </div>
          <div className="hidden sm:flex items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4 mt-2 sm:mt-0">
            <div onClick={() => { navigate('/buyer/cart') }} className="p-1 sm:p-2 md:p-3 cursor-pointer border border-slate-400 rounded-full">
              <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={cartBlackImg} alt="cart" />
            </div>
            <div onClick={() => { navigate('/buyer/wishlist') }} className="p-1 sm:p-2 md:p-3 cursor-pointer border border-slate-400 rounded-full">
              <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={heartBlackImg} alt="heart" />
            </div>
            <div onClick={() => { setIsNotificationsVisible(true) }} className="p-1 sm:p-2 md:p-3 cursor-pointer border border-slate-400 rounded-full">
              <img className="w-4 sm:w-5 md:w-6 lg:w-8" src={notificationBellBlack} alt="notification bell" />
            </div>
            <div onClick={() => { setIsProfileVisible(true) }} className="cursor-pointer">
              <img className="w-8 sm:w-12 md:w-16 lg:w-20" src={maleProfileImg} alt="profile" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md p-2 flex justify-around items-center z-10">
       <div onClick={() => { navigate('/') }} className="p-2 cursor-pointer text-slate-700">
          <ShoppingBag width={20}/>
        </div>
        <div onClick={() => { navigate('/buyer/wishlist') }} className="p-2 cursor-pointer">
          <img className="w-6" src={heartBlackImg} alt="heart" />
        </div>
        <div onClick={() => { setIsNotificationsVisible(true) }} className="p-2 cursor-pointer">
          <img className="w-6" src={notificationBellBlack} alt="notification bell" />
        </div>
        <div onClick={() => { setIsProfileVisible(true) }} className="cursor-pointer">
          <img className="w-10" src={maleProfileImg} alt="profile" />
        </div>
      </div>
    </>
  );
}