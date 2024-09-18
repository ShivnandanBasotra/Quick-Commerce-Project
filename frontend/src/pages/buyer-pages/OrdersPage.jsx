import React, { useState } from "react";
import { format } from "date-fns";
import onionImg from "../../assets/onion.jpg"
import { ChevronRight, Package } from "lucide-react";

const orders = [
    {
      id: "B2CE2MRAP41163",
      status: "Delivered",
      date: new Date("2024-07-30T20:42:00"),
      items: [
        { name: "Onion", quantity: 1, unit: "5kg", price: 44, discountedPrice: 40, image: onionImg },
        { name: "Potato", quantity: 2, unit: "2kg", price: 30, discountedPrice: 25, image: onionImg },
      ],
      total: 90,
      address: "85-B, Ranwar, Bandra West, Mumbai, Maharashtra 400050, India",
      arrivedAt: new Date("2024-07-30T20:59:00"),
      billSummary: {
        itemTotal: { actual: 104, discounted: 90 },
        gst: { actual: 5.2, discounted: 4.5 },
        handlingCharge: { actual: 15, discounted: 10 },
        deliveryFee: 0,
      },
    },
    {
      id: "B2CE2MRAP41164",
      status: "Delivered",
      date: new Date("2024-07-30T20:42:00"),
      items: [
        { name: "Onion", quantity: 1, unit: "5kg", price: 44, discountedPrice: 40, image: onionImg },
        { name: "Potato", quantity: 2, unit: "2kg", price: 30, discountedPrice: 25, image: onionImg },
      ],
      total: 90,
      address: "85-B, Ranwar, Bandra West, Mumbai, Maharashtra 400050, India",
      arrivedAt: new Date("2024-07-30T20:59:00"),
      billSummary: {
        itemTotal: { actual: 104, discounted: 90 },
        gst: { actual: 5.2, discounted: 4.5 },
        handlingCharge: { actual: 15, discounted: 10 },
        deliveryFee: 0,
      },
    },
    {
      id: "B2CE2MRAP41165",
      status: "Delivered",
      date: new Date("2024-07-30T20:42:00"),
      items: [
        { name: "Onion", quantity: 1, unit: "5kg", price: 44, discountedPrice: 40, image: onionImg },
        { name: "Potato", quantity: 2, unit: "2kg", price: 30, discountedPrice: 25, image: onionImg },
      ],
      total: 90,
      address: "85-B, Ranwar, Bandra West, Mumbai, Maharashtra 400050, India",
      arrivedAt: new Date("2024-07-30T20:59:00"),
      billSummary: {
        itemTotal: { actual: 104, discounted: 90 },
        gst: { actual: 5.2, discounted: 4.5 },
        handlingCharge: { actual: 15, discounted: 10 },
        deliveryFee: 0,
      },
    },
    {
      id: "B2CE2MRAP41166",
      status: "Delivered",
      date: new Date("2024-07-30T20:42:00"),
      items: [
        { name: "Onion", quantity: 1, unit: "5kg", price: 44, discountedPrice: 40, image: onionImg },
        { name: "Potato", quantity: 2, unit: "2kg", price: 30, discountedPrice: 25, image: onionImg },
      ],
      total: 90,
      address: "85-B, Ranwar, Bandra West, Mumbai, Maharashtra 400050, India",
      arrivedAt: new Date("2024-07-30T20:59:00"),
      billSummary: {
        itemTotal: { actual: 104, discounted: 90 },
        gst: { actual: 5.2, discounted: 4.5 },
        handlingCharge: { actual: 15, discounted: 10 },
        deliveryFee: 0,
      },
    },
  ];

  function OrderCard({ order, onClick }) {
    return (
      <div 
        className="flex items-center space-x-2 sm:space-x-4 p-4 sm:p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:bg-green-50" 
        onClick={onClick}
      >
        <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
          <Package className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-green-600" />
        </div>
        <div className="flex-grow min-w-0">
          <div className="flex justify-between items-center mb-1 sm:mb-2">
            <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate">Order #{order.id}</h3>
            <span className={`ml-2 px-2 sm:px-3 py-1 rounded-lg text-xs font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
              {order.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 truncate">Placed on {format(order.date, "do MMM yyyy, hh:mm a")}</p>
          <div className="flex mt-2 sm:mt-3 space-x-2 overflow-x-auto">
            {order.items.map((item, index) => (
              <img key={index} src={item.image} alt={item.name} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-cover rounded-lg border border-gray-200 flex-shrink-0" />
            ))}
          </div>
        </div>
        <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-400 flex-shrink-0" />
      </div>
    );
  }
  
  function OrderDetails({ order, onBack }) {
    const totalSaved =
      (order.billSummary.itemTotal.actual - order.billSummary.itemTotal.discounted) +
      (order.billSummary.gst.actual - order.billSummary.gst.discounted) +
      (order.billSummary.handlingCharge.actual - order.billSummary.handlingCharge.discounted);
  
    return (
      <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 bg-white rounded-lg shadow-lg">
        <button 
          onClick={onBack} 
          className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 border border-green-300 rounded-lg text-green-600 hover:bg-green-50 transition-colors"
        >
          ← Back to Orders
        </button>
  
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Order #{order.id}</h2>
          <span className={`mt-2 inline-block px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium ${order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}`}>
            {order.status}
          </span>
        </div>
  
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Items ({order.items.length})</h3>
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
              <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg border border-gray-300" />
              <div>
                <p className="font-medium text-gray-900 text-sm sm:text-base">{item.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{item.quantity} x {item.unit}</p>
                <p className="text-xs sm:text-sm">
                  <span className="line-through text-gray-400">₹{item.price}</span>{" "}
                  <span className="font-semibold text-gray-900">₹{item.discountedPrice}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
  
        <hr className="my-4 sm:my-6" />
  
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Bill Summary</h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            <div className="flex justify-between">
              <span className="text-gray-600">Item Total & GST</span>
              <span className="text-gray-900">
                <span className="line-through text-gray-400">₹{order.billSummary.itemTotal.actual + order.billSummary.gst.actual}</span> ₹{order.billSummary.itemTotal.discounted + order.billSummary.gst.discounted}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Handling Charge</span>
              <span className="text-gray-900">
                <span className="line-through text-gray-400">₹{order.billSummary.handlingCharge.actual}</span> ₹{order.billSummary.handlingCharge.discounted}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Delivery Fee</span>
              <span className="text-gray-900">₹{order.billSummary.deliveryFee}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span className="text-gray-900">Total Bill</span>
              <span className="text-gray-900">
                <span className="line-through text-gray-400 mr-2">₹{order.billSummary.itemTotal.actual + order.billSummary.gst.actual + order.billSummary.handlingCharge.actual + order.billSummary.deliveryFee}</span>
                ₹{order.billSummary.itemTotal.discounted + order.billSummary.gst.discounted + order.billSummary.handlingCharge.discounted + order.billSummary.deliveryFee}
              </span>
            </div>
            <div className="text-green-600 font-semibold">You saved ₹{totalSaved.toFixed(2)}</div>
          </div>
        </div>
  
        <hr className="my-4 sm:my-6" />
  
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Order Details</h3>
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-700">
            <p><strong>Order ID:</strong> #{order.id}</p>
            <p><strong>Delivery Address:</strong> {order.address}</p>
            <p><strong>Order Placed:</strong> {format(order.date, "do MMM yyyy, hh:mm a")}</p>
            <p><strong>Order Arrived at:</strong> {format(order.arrivedAt, "do MMM yyyy, hh:mm a")}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default function Component() {
    const [selectedOrder, setSelectedOrder] = useState(null);
  
    return (
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {selectedOrder ? (
          <OrderDetails order={selectedOrder} onBack={() => setSelectedOrder(null)} />
        ) : (
          <div>
            <div className="space-y-4 sm:space-y-6">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} onClick={() => setSelectedOrder(order)} />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  