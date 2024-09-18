import React, { useState } from 'react';
import { Mail, Phone, ShoppingCart, Heart, Gift, RotateCcw, Clock, HelpCircle, Calendar, Package, IndianRupee, Edit2, User, Building, Save, LocateIcon } from 'lucide-react';
import { useRecoilState } from 'recoil';
import isProfileDetailsOpenAtom from '../../atoms/adminUserProfileAtom';
import isEditingAtom from '../../atoms/adminUserlistAtom';

export default function UserProfileView() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isProfileDetailsOpen, setIsProfileDetailsOpen] = useRecoilState(isProfileDetailsOpenAtom);
  const [isEditing, setIsEditing] = useRecoilState(isEditingAtom);

  const userData = {
    name: "Shivnandan Basotra",
    username: "@shivnandanbasotra",
    email: "flashbacksnaps9@gmail.com",
    phone: "+91 9149916061",
    stats: {
      itemsBought: 12,
      wishlistedItems: 5,
      vouchers: 3,
      returns: 1,
      walletBalance: 1500,
    }
  };

  const recentActivity = [
    { type: "New Order", description: "Placed a new order #1234", icon: <ShoppingCart size={16} />, time: "2 hours ago" },
    { type: "Support Ticket", description: "Opened ticket #5678", icon: <HelpCircle size={16} />, time: "1 day ago" },
    { type: "Wishlist", description: "Added item to wishlist", icon: <Heart size={16} />, time: "3 days ago" },
    { type: "Return", description: "Initiated return for order #9012", icon: <RotateCcw size={16} />, time: "1 week ago" },
  ];

  const userFeedbacks = [
    { subject: "Great Customer Service", description: "The support team was incredibly helpful and resolved my issue quickly.", date: "2023-08-15" },
    { subject: "Product Quality", description: "The item I received was of excellent quality. Very satisfied with my purchase.", date: "2023-07-22" },
    { subject: "Delivery Feedback", description: "The delivery was faster than expected. Well packaged and arrived in perfect condition.", date: "2023-06-30" },
  ];

  const orderHistory = [
    { id: "ORD001", date: "2023-09-01", items: "Smartphone", total: 12000, status: "Delivered" },
    { id: "ORD002", date: "2023-08-15", items: "Laptop", total: 55000, status: "Shipped" },
    { id: "ORD003", date: "2023-07-22", items: "Headphones", total: 2500, status: "Processing" },
    { id: "ORD004", date: "2023-06-30", items: "Smart Watch", total: 8000, status: "Delivered" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden h-600">
        {/* User Header */}
        {!isEditing && !isProfileDetailsOpen && (<>
          <div className="bg-green-600 text-white p-6">
            <div className="flex items-center justify-between">
              <div onClick={() => { setIsProfileDetailsOpen(prev => !prev) }} className="flex items-center space-x-4 cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full overflow-hidden">
                  <img src="/api/placeholder/200/200" alt={userData.name} className="w-full h-full object-cover" />
                </div>
                <div className='font-bold'>
                  <h1 className="text-2xl">{userData.name}</h1>
                  <p className="text-green-200 flex items-center font-medium">flashbacksnaps9@gmail.com</p>
                  <p className="text-green-200 text-xl flex items-center">Wallet: ₹ 300 </p>
                </div>
              </div>
              <button onClick={() => { setIsEditing(true); setIsProfileDetailsOpen(true); }} className="flex items-center px-4 py-2 bg-green-700 rounded-lg hover:bg-green-800 transition-colors">
                <Edit2 size={18} className="mr-2" />
                Edit
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b">
            <TabButton active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>Overview</TabButton>
            <TabButton active={activeTab === 'activity'} onClick={() => setActiveTab('activity')}>Recent Activity</TabButton>
            <TabButton active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>Orders</TabButton>
            <TabButton active={activeTab === 'feedbacks'} onClick={() => setActiveTab('feedbacks')}>Feedbacks</TabButton>
          </div>

          {/* Content Area */}
          <div className="p-6 overflow-y-auto h-400">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoCard icon={<Mail />} label="Email" value={userData.email} />
                  <InfoCard icon={<Phone />} label="Phone" value={userData.phone} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <StatCard icon={<ShoppingCart />} label="Items Bought" value={userData.stats.itemsBought} />
                  <StatCard icon={<Heart />} label="Wishlisted" value={userData.stats.wishlistedItems} />
                  <StatCard icon={<Gift />} label="Vouchers" value={userData.stats.vouchers} />
                  <StatCard icon={<RotateCcw />} label="Returns" value={userData.stats.returns} />
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <ActivityItem key={index} activity={activity} />
                ))}
              </div>
            )}

            {activeTab === 'orders' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {orderHistory.map((order) => (
                    <OrderCard key={order.id} order={order} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'feedbacks' && (
              <div className="space-y-4">
                {userFeedbacks.map((feedback, index) => (
                  <FeedbackItem key={index} feedback={feedback} />
                ))}
                {userFeedbacks.map((feedback, index) => (
                  <FeedbackItem key={index} feedback={feedback} />
                ))}
              </div>
            )}
          </div>
        </>)}


        {isProfileDetailsOpen && (
          <div className="lg:col-span-2 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-semibold text-green-700">{(isProfileDetailsOpen && !isEditing) ? ('User Details') : ('Edit Profile')}</h2>
                <p className="text-sm text-green-500">{(isProfileDetailsOpen && !isEditing) ? ('View the details of user') : ("Update users's profile information")}</p>
              </div>
              <button
                className="bg-gray-100 text-green-700 hover:bg-gray-200 px-4 py-2 rounded-full font-semibold flex items-center transition-colors duration-300"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Edit2 className="w-5 h-5 mr-2" />
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            <div className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { id: 'firstName', label: 'First Name', icon: User, placeholder: 'John' },
                    { id: 'lastName', label: 'Last Name', icon: User, placeholder: 'Doe' },
                    { id: 'email', label: 'Email', icon: Mail, placeholder: 'john.doe@example.com', type: 'email' },
                    { id: 'phone', label: 'Phone', icon: Phone, placeholder: '+1 (555) 123-4567', type: 'tel' },
                    { id: 'savedAddresses', label: 'Saved Addresses', icon: LocateIcon, placeholder: 'New York, USA' }
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <label htmlFor={field.id} className="text-green-700 font-medium">{field.label}</label>
                      <div className="relative">
                        <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-600" />
                        <input
                          id={field.id}
                          type={field.type || 'text'}
                          placeholder={field.placeholder}
                          className="pl-10 border border-gray-300 focus:border-green-500 focus:ring-green-500 w-full rounded-md p-3 transition-all duration-300"
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  ))}

                </div>
              </form>
            </div>
            <div className="px-8 pb-8">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center transition-all duration-300" disabled={!isEditing}>
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const TabButton = ({ children, active, onClick }) => (
  <button
    className={`px-4 py-2 font-medium ${active ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'
      }`}
    onClick={onClick}
  >
    {children}
  </button>
);

const InfoCard = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
    <div className="text-green-600">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900">{value}</p>
    </div>
  </div>
);

const StatCard = ({ icon, label, value }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
    <div className="text-green-600 mb-2">{icon}</div>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
    <p className="text-sm text-gray-500">{label}</p>
  </div>
);

const ActivityItem = ({ activity }) => (
  <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
      {activity.icon}
    </div>
    <div className="flex-grow">
      <p className="text-sm font-medium text-gray-900">{activity.type}</p>
      <p className="text-sm text-gray-500">{activity.description}</p>
    </div>
    <div className="text-sm text-gray-500 flex items-center">
      <Clock size={14} className="mr-1" />
      {activity.time}
    </div>
  </div>
);

const FeedbackItem = ({ feedback }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-gray-800">{feedback.subject}</h3>
      <span className="text-sm text-gray-500">{feedback.date}</span>
    </div>
    <p className="text-gray-600">{feedback.description}</p>
  </div>
);

const OrderCard = ({ order }) => (
  <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-lg font-semibold text-gray-800">{order.id}</h3>
      <span className={`px-2 py-1 rounded-full text-xs ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
        {order.status}
      </span>
    </div>
    <div className="space-y-2">
      <p className="text-gray-600 flex items-center">
        <Calendar size={16} className="mr-2" />
        {order.date}
      </p>
      <p className="text-gray-600 flex items-center">
        <Package size={16} className="mr-2" />
        {order.items}
      </p>
      <p className="text-gray-600 flex items-center">
        <IndianRupee size={16} className="mr-2" />
        ₹{order.total}
      </p>
    </div>
  </div>
);