import { useState } from "react";
import bannerImg from "../../assets/banner.png"
import ItemBuyCard from "../../components/buyer-components/ItemBuyCard";

export default function HomePage() {
  const [headingClickOn, setHeadingClickOn] = useState("All");
  return (
    <div>
      <div>
        <div className={`sticky top-14 lg:top-24 md:top-20 sm:top-16 m-3 lg:h-14 md:h-12 bg-white lg:w-500 md:w-96 flex items-center lg:py-4 sm:py-2 py-1  rounded-2xl mx-auto lg:text-xl sm:text-lg text-sm shadow-2xl`}>
          <span onClick={(e) => setHeadingClickOn(e.target.textContent)} className={`cursor-pointer flex flex-col w-1/3  items-center ${(headingClickOn === "All") ? 'font-bold' : 'lg:hover:text-2xl'}`}>All<div className={`w-9/12 lg:h-2 h-1 bg-red-500 rounded-full ${headingClickOn === "All" ? '' : 'invisible'}`}></div></span>
          <span onClick={(e) => setHeadingClickOn(e.target.textContent)} className={`cursor-pointer flex flex-col w-1/3  items-center ${(headingClickOn === "Vegetables") ? 'font-bold' : 'lg:hover:text-2xl'}`}>Vegetables<div className={`w-9/12 lg:h-2 h-1 bg-red-500 rounded-full ${headingClickOn === "Vegetables" ? '' : 'invisible'}`}></div></span>
          <span onClick={(e) => setHeadingClickOn(e.target.textContent)} className={`cursor-pointer flex flex-col w-1/3  items-center ${(headingClickOn === "Fruits") ? 'font-bold' : 'lg:hover:text-2xl'}`}>Fruits<div className={`w-9/12 lg:h-2 h-1 bg-red-500 rounded-full ${headingClickOn === "Fruits" ? '' : 'invisible'}`}></div></span>
          <span onClick={(e) => setHeadingClickOn(e.target.textContent)} className={`cursor-pointer flex flex-col w-1/3  items-center ${(headingClickOn === "Hot Deals") ? 'font-bold' : 'lg:hover:text-2xl'}`}>Hot Deals<div className={`w-9/12 lg:h-2 h-1 bg-red-500 rounded-full ${headingClickOn === "Hot Deals" ? '' : 'invisible'}`}></div></span>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="px-4 sm:px-6 lg:px-8 my-4 sm:my-6 lg:my-8">
            <div className="rounded-lg overflow-hidden">
              <img className="w-full h-auto" src={bannerImg} alt="Banner" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4 sm:mt-6 lg:mt-8">
              {[...Array(9)].map((_, index) => (
                <ItemBuyCard key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

