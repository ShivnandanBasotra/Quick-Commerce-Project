import React from 'react';
import couponGraphicImg from "../../assets/couponGraphic.png";

const CouponPage = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6 md:p-9">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="w-full md:w-3/5 mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Get exciting cashback
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-semibold mb-6">
              Enter coupon code and redeem to get cashback and more offers on ordering
            </p>
            <div className="flex items-center bg-white rounded-3xl shadow-md max-w-lg py-1 px-2 shadow-slate-400 shadow-lg">
              <input 
                type="text" 
                placeholder="Enter Coupon Code" 
                className="text-slate-900 text-xs sm:text-sm md:text-base font-medium flex-grow px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-transparent text-gray-500 rounded-3xl focus:outline-none"
              />
              <button className="bg-red-500 text-white text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-9 py-2 sm:py-3 md:py-4 rounded-3xl hover:bg-red-600 transition-colors whitespace-nowrap">
                Claim coupon
              </button>
            </div>
          </div>
          <div className="w-full md:w-2/5">
            <img src={couponGraphicImg} alt="Cashback Offer" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponPage;