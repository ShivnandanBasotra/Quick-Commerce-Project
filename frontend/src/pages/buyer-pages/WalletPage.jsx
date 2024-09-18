import React from 'react';

export default function WalletPage() {
    return (
        <div className="min-h-screen flex justify-center items-center p-2 sm:p-4 md:p-6">
            <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl sm:rounded-3xl overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-700 p-4 sm:p-6 md:p-8 text-white">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-1 sm:mb-2">₹300</h2>
                    <p className="text-base sm:text-lg md:text-xl opacity-80">Your Balance</p>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center mb-4 sm:mb-6 md:mb-8">
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="hide-spinner w-full sm:w-48 px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent mb-2 sm:mb-0"
                            step="100"
                            min="0"
                        />
                        <button className="w-full sm:w-auto px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition duration-300 transform hover:scale-105 text-sm sm:text-base">
                            Add Money
                        </button>
                    </div>
                    <div className="flex gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 overflow-x-auto pb-2">
                        {[1000, 2000, 5000].map((amount) => (
                            <button key={amount} className="flex-shrink-0 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gray-100 rounded-full text-gray-800 font-semibold hover:bg-gray-200 transition duration-300 transform hover:scale-105 text-sm sm:text-base">
                                + {amount}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4 sm:mt-6 md:mt-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">Transaction History</h3>
                            <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                                {['All', 'Credits', 'Debits'].map((filter) => (
                                    <button key={filter} className="flex-shrink-0 px-3 sm:px-4 py-1 sm:py-2 border-2 border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-100 transition duration-300 text-sm sm:text-base">
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="max-h-64 sm:max-h-80 md:max-h-96 overflow-y-auto pr-2">
                            {[...Array(6)].map((_, index) => (
                                <div key={index} className="bg-gray-50 p-3 sm:p-4 md:p-5 rounded-xl mb-2 sm:mb-3 shadow-sm flex justify-between items-center hover:bg-gray-100 transition duration-300">
                                    <p className="text-base sm:text-lg text-gray-700">Added amount</p>
                                    <p className="text-lg sm:text-xl text-green-600 font-semibold">+₹500</p>
                                </div>
                            ))}
                        <div className="flex justify-center mt-4 sm:mt-6 mb-40">
                            <button className="text-green-500 border-2 border-green-400 rounded-full py-1 sm:py-2 px-4 sm:px-6 flex items-center hover:bg-green-50 transition duration-300 text-sm sm:text-base">
                                <span className="font-black text-lg sm:text-xl mr-1 sm:mr-2">⇩</span> Load more
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}