import React from 'react';

export default function OrdersHistoryPage() {
    return (
        <div className="min-h-screen mt-4 sm:mt-7 px-2 sm:px-4 md:px-6">
            <div className="bg-white shadow-md rounded-lg w-full max-w-3xl mx-auto h-[calc(100vh-2rem)] sm:h-[600px] overflow-y-auto">
                {/* Tabs */}
                <div className="bg-white border-b py-3 sm:py-4 md:h-20 flex items-center sticky top-0 z-1 justify-center px-2 sm:px-4">
                    <div className="flex justify-between w-full sm:w-4/5 md:w-2/3 bg-slate-100 rounded-3xl text-xs sm:text-sm">
                        <button className="bg-green-600 w-1/3 py-2 sm:py-3 rounded-3xl flex justify-center text-white font-semibold">
                            All
                        </button>
                        <button className="w-1/3 py-2 sm:py-3 rounded-3xl flex justify-center text-slate-400 font-semibold">
                            Debits
                        </button>
                        <button className="w-1/3 py-2 sm:py-3 rounded-3xl flex justify-center text-slate-400 font-semibold">
                            Credits
                        </button>
                    </div>
                </div>

                {/* Transaction Items */}
                {[...Array(6)].map((_, index) => (
                    <React.Fragment key={index}>
                        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
                            <div className="flex items-center">
                                <div className="bg-purple-100 p-1 sm:p-2 rounded-full mr-2 sm:mr-4">
                                    {/* Replace with your icon */}
                                    <img src="icon_url" alt="Shopping Cart Icon" className="h-4 w-4 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-xs sm:text-sm">Placed Order # B2CE2MRAP41163</p>
                                    <p className="text-gray-500 text-xs">30/07/2024 at 08:42pm</p>
                                </div>
                            </div>
                            <p className="font-semibold text-black text-xs sm:text-sm">₹50</p>
                        </div>
                        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
                            <div className="flex items-center">
                                <div className="bg-purple-100 p-1 sm:p-2 rounded-full mr-2 sm:mr-4">
                                    {/* Replace with your icon */}
                                    <img src="icon_url" alt="Gift Icon" className="h-4 w-4 sm:h-6 sm:w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold text-xs sm:text-sm">Refund for returned order- B2CE2MRAP41163</p>
                                    <p className="text-gray-500 text-xs">30/07/2024 at 10:03am</p>
                                </div>
                            </div>
                            <p className="font-semibold text-green-500 text-xs sm:text-sm">+₹50</p>
                        </div>
                    </React.Fragment>
                ))}

                <div className="pb-6 sm:pb-9 flex justify-center pt-4">
                    <button className="text-red-500 border-2 border-red-400 rounded-3xl py-1 px-3 flex items-center text-xs sm:text-sm">
                        <span className="font-black text-lg sm:text-xl mr-1">⇩</span> Load more
                    </button>
                </div>
            </div>
        </div>
    )
}