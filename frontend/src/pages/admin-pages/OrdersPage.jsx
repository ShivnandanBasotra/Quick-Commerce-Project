import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const items = [
    { Id: 14938509385, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509386, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509387, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509388, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509389, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509390, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509391, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509392, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509393, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509394, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
    { Id: 14938509395, 'item Name': "watch, keyboard", 'Customer Name': "Shivnandan Basotra", 'Customer Email': "flashbacksnaps9@gmail.com", Items: 3, Price: 1400, Status: "Delivered", 'Ordered Date': "20-12-2024" },
  ];

  const [infoId, setInfoId] = useState(null);
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-4">

      <div className="bg-white py-6 rounded-lg shadow-lg max-w-7xl mx-auto">
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
              <option value="New Orders">New Orders</option>
              <option value="Orders History">Orders History</option>
              <option value="Delivered Orders">Delivered Orders</option>
              <option value="Processing Orders">Processing Orders</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <label htmlFor="searchUser" className="text-gray-600 font-medium">Search</label>
            <input
              type="text"
              id="searchUser"
              className="border border-gray-300 rounded-md px-4 py-1 text-gray-700"
              placeholder="Search orders..."
            />
          </div>
        </div>

        <div className="grid grid-cols-[50px,1fr,200px,250px,1fr,1fr,1fr,1fr,1fr] font-semibold text-green-700 border-b-2 py-2 px-6 bg-green-50">
          <div>S.No</div>
          <div>Id</div>
          <div>Item Name</div>
          <div>Customer</div>
          <div>Items</div>
          <div>Price</div>
          <div>Status</div>
          <div>Ordered Date</div>
          <div>Actions</div>
        </div>

        {items.map((item, index) => (
          <div onClick={()=>{navigate('/admin/order-view')}} key={index} className="cursor-pointer hover:bg-green-50 grid grid-cols-[50px,1fr,200px,250px,1fr,1fr,1fr,1fr,1fr] border-b py-2 px-6 items-center relative">
            <div>{index + 1}</div>
            <div>{item.Id}</div>
            <div>{item['item Name']}</div>
            <div>
              <div>{item['Customer Name']}</div>
              <div className="text-sm text-gray-500">{item['Customer Email']}</div>
            </div>
            <div>{item.Items}</div>
            <div>{item.Price}</div>
            <div className={` ${item.Status === 'Delivered' ? 'text-green-600' : 'text-yellow-600'}`}>
              {item.Status}
            </div>
            <div>{item["Ordered Date"]}</div>
            <div className="">
              <button onClick={(e) => { setInfoId((prev) => prev === item.Id ? null : item.Id);e.stopPropagation()}} className="hover:bg-green-200 flex items-center border border-green-400 text-green-400 rounded-full">
                <span className="flex items-center">
                  <span className="font-medium px-3">Info</span>
                </span>
                <span className="flex justify-center items-center w-6 h-6 border-l border-green-400">
                  <div className=''>
                  {infoId===item.Id?<ChevronUp className="w-4 h-4 text-green-400" />:<ChevronDown className="w-4 h-4 text-green-400" />}
                  </div>
                </span>
              </button>
              {infoId === item.Id ? <div className='bg-white shadow-md absolute right-2 z-10 min-w-40 min-h-16'> <div className='hover:bg-slate-100  px-4 py-2'>Details</div> <div className='hover:bg-slate-100  px-4 py-2'>Track</div> <div className='hover:bg-slate-100  px-4 py-2'>Cancel</div></div> : ''}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-6 px-6">
          <span className="text-sm text-gray-600">Showing 1 to 20 of 88 entries</span>
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
