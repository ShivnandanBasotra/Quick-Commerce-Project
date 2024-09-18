import React, { useState } from 'react';
import { Grid, Users, Package, ShoppingCart, Star, ChevronLeft, ChevronRight, LogOutIcon } from 'lucide-react';
import { useRecoilState } from 'recoil';
import isDashboardCompact from '../../atoms/isAdminDashboardCompact';
import SidebarItem from './SidebarItem';
import { Link, useNavigate } from 'react-router-dom';



const Slidebar = () => {
  const [activeItem, setActiveItem] = useState('DASHBOARD');
  const [isCompact, setIsCompact] = useRecoilState(isDashboardCompact);

  const menuItems = [
    { icon: <Grid size={isCompact ? 24 : 18} />, label: 'DASHBOARD', url: '/admin/dashboard' },
    { icon: <Users size={isCompact ? 24 : 18} />, label: 'USERS', url: '/admin/userlist' },
    { icon: <Package size={isCompact ? 24 : 18} />, label: 'PRODUCTS', url: '/admin/productlist'  },
    { icon: <ShoppingCart size={isCompact ? 24 : 18} />, label: 'ORDERS', url: '/admin/orderlist'  },
    { icon: <Star size={isCompact ? 24 : 18} />, label: 'FEEDBACKS', url: '/admin/feedbackspage'  },
      ];

  

  const toggleCompact = () => {
    setIsCompact(prev => !prev);
  };

  const navigate = useNavigate();

  return (
    <div className={`h-screen bg-white border-r transition-all duration-300 ${isCompact ? 'w-20' : 'w-80'}`}>
      <div className="py-9 px-5 border-b flex items-center justify-between">
        {!isCompact && (
          <div className='flex items-center gap-6'>
            <div onClick={()=>{navigate('/')}} className='flex items-center cursor-pointer'>
              <svg className="w-8 h-8 mr-2 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="text-xl font-bold text-gray-800">Sabzi Mandi</span>
            </div>
            <ChevronLeft onClick={toggleCompact} size={24} strokeWidth={2} className='cursor-pointer' />
          </div>
        )}
        {isCompact && (
          <div>
            <div onClick={()=>{navigate('/')}}>
              <svg className="w-8 h-8 text-green-600 cursor-pointer" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <ChevronRight onClick={toggleCompact} size={24} strokeWidth={2} className='cursor-pointer' />
          </div>

        )}
      </div>
      <nav className="mt-4 pl-2">
        {menuItems.map((item) => (
          <Link to={item.url}>
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
            isCompact={isCompact}
          />
          </Link>  
        ))}
      </nav>
    </div>
  );
};

export default Slidebar;