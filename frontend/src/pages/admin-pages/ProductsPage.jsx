import { ChevronDown, ChevronUp, CirclePlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductsPage() {
  const items = [
    {id:1, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:2, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:3, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:4, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:5, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:6, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:7, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:8, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:9, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:10, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:11, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
    {id:12, Product: "OnionImg", Name: "onion", Catergory: "Vegetables", Price: 35, Offer: '25%', Purchased: 2009, Stocks: 290 },
  ];

  const [infoId, setInfoId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-4">      
      <div className="bg-white py-6 rounded-lg shadow-lg max-w-7xl mx-auto mt-2">
        <div className="flex justify-between mb-6 items-center px-6">
          <div className="flex items-center space-x-2">
            <label htmlFor="entries" className="text-gray-600 font-medium">Show</label>
            <select
              name="entries"
              id="entries"
              className="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
            >
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
              <option value="All">All</option>
            </select>
            <span className="text-gray-600 font-medium">Entries</span>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="Category" className="text-gray-600 font-medium">Select Category:</label>
            <select
              name="Category"
              id="Category"
              className="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
            >
              <option value="All">All</option>
              <option value="vegetables">Vegetables</option>
              <option value="fruits">Fruits</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="searchUser" className="text-gray-600 font-medium">Search</label>
            <input
              type="text"
              id="searchUser"
              className="border border-gray-300 rounded-md px-4 py-1 text-gray-700"
              placeholder="Search products..."
            />
          </div>
        </div>

        <div className="px-6 py-4 grid grid-cols-[50px,1fr,1fr,1fr,1fr,1fr,1fr,1fr,100px] font-semibold text-green-700 border-b-2  bg-green-50 ">
          <div>S.No</div>
          <div>Product</div>
          <div>Name</div>
          <div>Category</div>
          <div>Price</div>
          <div>Offer</div>
          <div>Purchased</div>
          <div>Stocks</div>
          <div>Actions</div>
        </div>

        {items.map((item, index) => (
          <div onClick={()=>{navigate('/admin/product-view')}} key={item.id} className="hover:bg-green-50 cursor-pointer py-4 px-6 grid grid-cols-[50px,1fr,1fr,1fr,1fr,1fr,1fr,1fr,100px] border-b items-center relative">
            <div>{index + 1}</div>
            <div>{item.Product}</div>
            <div>{item.Name}</div>
            <div>{item.Catergory}</div>
            <div>{item.Price}</div>
            <div>{item.Offer}</div>
            <div>{item.Purchased}</div>
            <div>{item.Stocks}</div>
            <div className="">
              <button onClick={(e)=>{setInfoId((prev)=>prev===item.id?null: item.id);e.stopPropagation()}} className="hover:bg-green-200 flex items-center border border-green-400 text-green-400 rounded-full">
                <span className="flex items-center">
                  <span className="font-medium px-3">Info</span>
                </span>
                <span className="flex justify-center items-center w-6 h-6 border-l border-green-400">
                  <div className=''>
                  {infoId===item.id?<ChevronUp className="w-4 h-4 text-green-400" />:<ChevronDown className="w-4 h-4 text-green-400" />}
                  </div>
                </span>
              </button>
              {infoId===item.id?<div className='bg-white shadow-md absolute right-2 z-10 min-w-40 min-h-16'> <div className='hover:bg-slate-100  px-4 py-2'>Edit</div> <div className='hover:bg-slate-100  px-4 py-2'>Delete</div></div>:''}  
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6 px-6 ">
        <span className="text-sm text-gray-500 font-md">Showing <span className='font-bold'>1</span> to <span className='font-bold'>20</span> of 88 entries</span>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md">Previous</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">1</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">2</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded-md">3</button>
            <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
