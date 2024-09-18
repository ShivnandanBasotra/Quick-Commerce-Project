import { useState } from "react";
import ItemBuyCard from "../../components/buyer-components/ItemBuyCard";

export default function WishListPage() {
    const [filter, setFilter] = useState("all");

    return (
        <div className="min-h-[calc(100vh-96px-2rem)]">
            <div className="px-4 my-2 sm:my-5 md:my-9 sm:container xl:max-w-[1200px] mx-auto">
                <div className="mb-9">
                    {/* Wishlist Header */}
                    <div className="flex flex-col gap-y-4 sm:flex-row sm:justify-between sm:items-center sm:mb-8 mb-4">
                        <h1 className="text-2xl sm:text-3xl font-semibold">My Wishlist (24 items)</h1>
                        
                        {/* Filter Buttons */}
                        <div className="flex space-x-2 sm:space-x-4">
                            <button
                                className={`px-3 sm:px-4 py-2 rounded-lg border ${filter === "all" ? "bg-red-500 text-white" : "bg-white text-gray-800 border-gray-300"}`}
                                onClick={() => setFilter("all")}
                            >
                                All
                            </button>
                            <button
                                className={`px-3 sm:px-4 py-2 rounded-lg border ${filter === "vegetables" ? "bg-red-500 text-white" : "bg-white text-gray-800 border-gray-300"}`}
                                onClick={() => setFilter("vegetables")}
                            >
                                Vegetables
                            </button>
                            <button
                                className={`px-3 sm:px-4 py-2 rounded-lg border ${filter === "fruits" ? "bg-red-500 text-white" : "bg-white text-gray-800 border-gray-300"}`}
                                onClick={() => setFilter("fruits")}
                            >
                                Fruits
                            </button>
                        </div>
                    </div>

                    {/* Wishlist Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        <ItemBuyCard />
                        <ItemBuyCard />
                        <ItemBuyCard />
                        <ItemBuyCard />
                        <ItemBuyCard />
                    </div>
                </div>
            </div>
        </div>
    );
}
