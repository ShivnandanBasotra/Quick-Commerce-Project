import React from 'react';
import { ShoppingCart, Users, TrendingUp, DollarSign } from 'lucide-react';
import TotalStatCard from '../../components/admin-components/DailyStatCard';
import OrderStatsChart from '../../components/admin-components/OrderStatsChart';

const AdminDashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <TotalStatCard title="Total Signups" value="150" icon={Users} />
        <TotalStatCard title="Total Visitors" value="2,345" icon={TrendingUp} />
        <TotalStatCard title="Total Orders" value="432" icon={ShoppingCart} />
        <TotalStatCard title="Total Revenue" value="₹54,321" icon={DollarSign} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <OrderStatsChart />
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Top Selling Items</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Item</th>
                <th className="text-right py-2">Sales</th>
                <th className="text-right py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {['Tomatoes', 'Potatoes', 'Onions', 'Carrots', 'Cucumbers'].map((item, index) => (
                <tr key={index} className="border-b last:border-b-0">
                  <td className="py-2">{item}</td>
                  <td className="text-right py-2">{Math.floor(Math.random() * 1000) + 500}</td>
                  <td className="text-right py-2">₹{(Math.random() * 10000 + 5000).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;