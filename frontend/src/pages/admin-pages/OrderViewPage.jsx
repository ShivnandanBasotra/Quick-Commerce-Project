import React from 'react';
import { Package, Truck, Calendar, CreditCard } from 'lucide-react';

const DetailField = ({ label, value }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <p className="text-gray-900 bg-gray-100 px-3 py-2 rounded-md">{value}</p>
  </div>
);

const OrderItemList = ({ items }) => (
  <div className="mt-6">
    <h2 className="text-xl font-semibold mb-3 text-gray-900">Order Items</h2>
    <div className="bg-gray-100 rounded-md overflow-hidden">
      {items.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-4 border-b border-gray-200 last:border-b-0">
          <div className="flex items-center space-x-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.quantity} x {item.unit}</p>
            </div>
          </div>
          <p className="font-medium text-gray-900">₹{item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  </div>
);

const OrderView = ({ order }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Order Details</h1>
        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
          order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
          order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <DetailField label="Order ID" value={order.id} />
          <DetailField label="Order Date" value={order.date} />
          <DetailField label="Total Amount" value={`₹${order.totalAmount.toFixed(2)}`} />
          <DetailField label="Payment Method" value={order.paymentMethod} />
        </div>
        <div className="space-y-6 bg-gray-50 p-6 rounded-lg">
          <DetailField label="Customer Name" value={order.customerName} />
          <DetailField label="Delivery Address" value={order.deliveryAddress} />
          <DetailField label="Contact Number" value={order.contactNumber} />
        </div>
      </div>

      <OrderItemList items={order.items} />

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center">
          <Package className="text-gray-700 mb-2" size={24} />
          <span className="text-sm font-medium text-gray-700">Total Items</span>
          <span className="text-lg font-semibold text-gray-900">{order.items.length}</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center">
          <Truck className="text-gray-700 mb-2" size={24} />
          <span className="text-sm font-medium text-gray-700">Delivery Method</span>
          <span className="text-lg font-semibold text-gray-900">{order.deliveryMethod}</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center">
          <Calendar className="text-gray-700 mb-2" size={24} />
          <span className="text-sm font-medium text-gray-700">Estimated Delivery</span>
          <span className="text-lg font-semibold text-gray-900">{order.estimatedDelivery}</span>
        </div>
        <div className="bg-gray-100 p-4 rounded-md flex flex-col items-center justify-center">
          <CreditCard className="text-gray-700 mb-2" size={24} />
          <span className="text-sm font-medium text-gray-700">Payment Status</span>
          <span className="text-lg font-semibold text-gray-900">{order.paymentStatus}</span>
        </div>
      </div>
    </div>
  );
};

// Example usage
export default function OrderViewPage() {
  const exampleOrder = {
    id: "ORD123456",
    date: "2024-09-10",
    status: "Processing",
    totalAmount: 1191.85,
    paymentMethod: "Credit Card",
    customerName: "John Doe",
    deliveryAddress: "123 Main St, Anytown, AN 12345",
    contactNumber: "+1 (555) 123-4567",
    items: [
      {
        name: "Onion Red (New Crop, Premium, 55 mm+)",
        quantity: 5,
        unit: "kg",
        price: 238.37,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=640&h=640&q=80",
      },
      {
        name: "Tomato (Fresh, Grade A)",
        quantity: 3,
        unit: "kg",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=640&h=640&q=80",
      },
    ],
    deliveryMethod: "Standard Shipping",
    estimatedDelivery: "2024-09-15",
    paymentStatus: "Paid",
  };

  return <OrderView order={exampleOrder} />;
}