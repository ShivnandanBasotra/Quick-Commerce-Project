import { Header } from "../components/Header"
import bannerImg from "../assets/banner.png"
import onionImg from "../assets/onion.jpg"
import heartBlackImg from "../assets/heartBlack.png"

export function BuyersPage() {
    return (
        <>
            <Header />
            <div>
                <div className="sticky top-20 py-9 bg-slate-100">
                    <div className="w-64 bg-white flex justify-between py-4 px-8 rounded-2xl mx-auto text-xl">
                        <span className="font-bold cursor-pointer">Vegetables</span>
                        <span className="cursor-pointer">Fruits</span>
                    </div>
                </div>

                <div className="w-1200 mx-auto" >
                    <div className="flex">
                        <div className="w-64 h-96 bg-white sticky top-52 rounded-3xl pl-9">
                            <ul className="border-box flex flex-col text-xl">
                                <li className="py-2 font-bold">All</li>
                                <li className="py-2 text-slate-600 font-medium ">Indian Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium">Tomato, Onion, Potato</li>
                                <li className="py-2 text-slate-600 font-medium">Exotic Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium">Leafy Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium">Fruits</li>
                                <li className="py-2 text-slate-600 font-medium">Cut Vegetables</li>
                            </ul>
                        </div>

                        <div className="w-3/4 px-4 m-2">

                            <div className="rounded-lg">
                                <img src={bannerImg} alt="" />
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-4">

                                <div className="w-70 bg-white rounded-lg shadow-md p-4">
                                    <div className="flex justify-between">
                                        <img src={onionImg} alt="Onion Red" className="w-32 rounded-t-lg" />
                                        <div className="flex flex-col justify-between items-center h-24">
                                            <div className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">28% OFF</div>
                                            <div className="rounded-full border-2 border-slate-200 p-2">
                                                <img className="h-5" src={heartBlackImg} alt="heart" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold">Onion Red (New Crop, Premium, 55 mm+), 5 Kg</h3>
                                        <p className="text-gray-600 mt-1">5 kg</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center mb-2 bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹43.44/kg for 25 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 5</button>
                                        </div>
                                        <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹44.29/kg for 15 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 3</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <span className="text-xl font-bold">₹225.57</span>
                                            <span className="text-gray-500 line-through ml-2">₹301.3</span>
                                            <p className="text-gray-500 text-sm">at ₹45.11/kg</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                          <button className="bg-[rgb(255,245,246)] text-red-500 font-bold border-2 border-red-500 px-3 py-0.4 rounded-lg">ADD <span className="ml-2">+</span></button> 
                                          <span className="text-sm font-medium text-slate-400">Min 2kg</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className="w-70 bg-white rounded-lg shadow-md p-4">
                                    <div className="flex justify-between">
                                        <img src={onionImg} alt="Onion Red" className="w-32 rounded-t-lg" />
                                        <div className="flex flex-col justify-between items-center h-24">
                                            <div className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">28% OFF</div>
                                            <div className="rounded-full border-2 border-slate-200 p-2">
                                                <img className="h-5" src={heartBlackImg} alt="heart" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold">Onion Red (New Crop, Premium, 55 mm+), 5 Kg</h3>
                                        <p className="text-gray-600 mt-1">5 kg</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center mb-2 bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹43.44/kg for 25 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 5</button>
                                        </div>
                                        <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹44.29/kg for 15 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 3</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <span className="text-xl font-bold">₹225.57</span>
                                            <span className="text-gray-500 line-through ml-2">₹301.3</span>
                                            <p className="text-gray-500 text-sm">at ₹45.11/kg</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                          <button className="bg-[rgb(255,245,246)] text-red-500 font-bold border-2 border-red-500 px-3 py-0.4 rounded-lg">ADD <span className="ml-2">+</span></button> 
                                          <span className="text-sm font-medium text-slate-400">Min 2kg</span> 
                                        </div>
                                    </div>
                                </div>
                                <div className="w-70 bg-white rounded-lg shadow-md p-4">
                                    <div className="flex justify-between">
                                        <img src={onionImg} alt="Onion Red" className="w-32 rounded-t-lg" />
                                        <div className="flex flex-col justify-between items-center h-24">
                                            <div className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">28% OFF</div>
                                            <div className="rounded-full border-2 border-slate-200 p-2">
                                                <img className="h-5" src={heartBlackImg} alt="heart" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="text-lg font-semibold">Onion Red (New Crop, Premium, 55 mm+), 5 Kg</h3>
                                        <p className="text-gray-600 mt-1">5 kg</p>
                                    </div>
                                    <div className="mt-4">
                                        <div className="flex justify-between items-center mb-2 bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹43.44/kg for 25 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 5</button>
                                        </div>
                                        <div className="flex justify-between items-center bg-blue-50 p-2 rounded">
                                            <span className="text-blue-600 font-semibold">₹44.29/kg for 15 kgs+</span>
                                            <button className="text-red-500 font-bold">Add 3</button>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-between items-center">
                                        <div>
                                            <span className="text-xl font-bold">₹225.57</span>
                                            <span className="text-gray-500 line-through ml-2">₹301.3</span>
                                            <p className="text-gray-500 text-sm">at ₹45.11/kg</p>
                                        </div>
                                        <div className="flex flex-col items-center">
                                          <button className="bg-[rgb(255,245,246)] text-red-500 font-bold border-2 border-red-500 px-3 py-0.4 rounded-lg">ADD <span className="ml-2">+</span></button> 
                                          <span className="text-sm font-medium text-slate-400">Min 2kg</span> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

