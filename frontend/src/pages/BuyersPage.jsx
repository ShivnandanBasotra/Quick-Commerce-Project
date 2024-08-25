import { Header } from "../components/Header"
import bannerImg from "../assets/banner.png"
import { ItemBuyCard } from "../components/itemBuyCard"

export function BuyersPage() {

    return (
        <div>  
            <Header/>
            <div>
                    <div className={`sticky top-20 m-3  w-96 bg-white flex justify-evenly py-4  rounded-2xl mx-auto text-xl shadow-lg`}>
                        <span className="font-bold cursor-pointer">Vegetables</span>
                        <span className="cursor-pointer">Fruits</span>
                        <span className="cursor-pointer">Hot Deals</span>
                    </div>   

                <div className="w-1200 mx-auto" >
                    <div className="flex">
                        <div className="w-64 h-96 bg-white sticky top-52 rounded-3xl pl-9">
                            <ul className="border-box flex flex-col text-xl">
                                <li className="py-2 font-bold cursor-pointer">All</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Indian Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Tomato, Onion, Potato</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Exotic Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Leafy Vegetables</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Fruits</li>
                                <li className="py-2 text-slate-600 font-medium cursor-pointer">Cut Vegetables</li>
                            </ul>
                        </div>

                        <div className="w-3/4 px-4 m-2">

                            <div className="rounded-lg">
                                <img src={bannerImg} alt="" />
                            </div>

                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <ItemBuyCard/>
                                <ItemBuyCard/>
                                <ItemBuyCard/>
                                <ItemBuyCard/>
                                <ItemBuyCard/>
                                <ItemBuyCard/>  
                                <ItemBuyCard/>
                                <ItemBuyCard/>
                                <ItemBuyCard/>    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

