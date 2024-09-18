import React from "react";
import onionImg from "../../assets/onion.jpg";

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen my-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-gray-50 p-4 sm:p-8 lg:p-12 rounded-2xl shadow-xl">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-96 relative mb-6 lg:mb-0">
            <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl flex justify-center items-center bg-slate-100">
              <img src={onionImg} alt="onion image" className="h-56 w-56 sm:h-72 sm:w-72 lg:h-80 lg:w-80 rounded-2xl object-cover" />
            </div>
            <span className="absolute top-4 right-4 bg-blue-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded">5% OFF</span>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">Onion Red (New Crop, Premium, 55 mm+), 5 Kg</h2>
              <p className="text-gray-500 mt-2 sm:mt-4 text-base sm:text-lg font-semibold">5 kg</p>
            </div>
            <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
                <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-2 sm:mb-0">₹46/kg for 25 kgs+</span>
                <button className="text-red-500 text-lg sm:text-xl font-semibold">Add 5</button>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-blue-50 p-3 sm:p-4 rounded-lg">
                <span className="text-blue-600 text-lg sm:text-xl font-semibold mb-2 sm:mb-0">₹46.85/kg for 15 kgs+</span>
                <button className="text-red-500 text-lg sm:text-xl font-semibold">Add 3</button>
              </div>
            </div>
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl font-bold">₹238.37</span>
                  <span className="ml-2 sm:ml-4 text-gray-400 line-through text-xl sm:text-2xl">₹242</span>
                </div>
                <p className="text-base sm:text-lg text-gray-500 mt-1 sm:mt-2">at ₹47.67/kg</p>
              </div>
              <div className="text-center w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-red-50 hover:bg-red-100 text-red-500 text-base sm:text-lg font-semibold border border-red-500 px-6 sm:px-10 py-2 rounded-xl">
                  ADD +
                </button>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Min. Qty 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;