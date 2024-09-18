import React, { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import isAdminActivityLogVisibleAtom from '../../atoms/adminAcitivityLogAtom';
import { X, Plus, Settings, Trash, Edit, File, User } from 'lucide-react';

const AdminActivityLog = () => {
  const setIsAdminActivityLogVisible = useSetRecoilState(isAdminActivityLogVisibleAtom);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const mockActivities = [
      { id: 1, user: 'John Doe', action: 'created', target: 'New Post', timestamp: '2 mins ago', icon: 'Plus' },
      { id: 2, user: 'Jane Smith', action: 'updated', target: 'User Settings', timestamp: '10 mins ago', icon: 'Settings' },
      { id: 3, user: 'Mike Johnson', action: 'deleted', target: 'Old File', timestamp: '1 hour ago', icon: 'Trash' },
      { id: 4, user: 'Sarah Williams', action: 'edited', target: 'Product Description', timestamp: '3 hours ago', icon: 'Edit' },
      { id: 5, user: 'Chris Lee', action: 'uploaded', target: 'New Document', timestamp: 'Yesterday', icon: 'File' },
      { id: 6, user: 'Emma Wilson', action: 'registered', target: 'New Account', timestamp: '2 days ago', icon: 'User' },
      { id: 7, user: 'John Doe', action: 'created', target: 'New Post', timestamp: '2 mins ago', icon: 'Plus' },
      { id: 8, user: 'Jane Smith', action: 'updated', target: 'User Settings', timestamp: '10 mins ago', icon: 'Settings' },
      { id: 9, user: 'Mike Johnson', action: 'deleted', target: 'Old File', timestamp: '1 hour ago', icon: 'Trash' },
      { id: 10, user: 'Sarah Williams', action: 'edited', target: 'Product Description', timestamp: '3 hours ago', icon: 'Edit' },
      { id: 11, user: 'Chris Lee', action: 'uploaded', target: 'New Document', timestamp: 'Yesterday', icon: 'File' },
      { id: 12, user: 'Emma Wilson', action: 'registered', target: 'New Account', timestamp: '2 days ago', icon: 'User' },
    ];
    setActivities(mockActivities);
  }, []);

  const getIcon = (iconName) => {
    const icons = {
      Plus: <Plus className="text-green-500" size={24} />,
      Settings: <Settings className="text-yellow-500" size={24} />,
      Trash: <Trash className="text-red-500" size={24} />,
      Edit: <Edit className="text-blue-500" size={24} />,
      File: <File className="text-purple-500" size={24} />,
      User: <User className="text-teal-500" size={24} />,
    };
    return icons[iconName] || <File className="text-gray-500" size={24} />;
  };

  return (
    <div className="h-screen w-96 bg-white fixed right-0 top-0 z-30 shadow-lg">
      <div className="sticky top-0 bg-gray-100 flex items-center px-4 py-6 border-b border-gray-300">
        <button 
          onClick={() => { setIsAdminActivityLogVisible(false); }} 
          className="text-gray-600 hover:text-red-600 transition-all">
          <X size={24} />
        </button>
        <h2 className="text-xl font-semibold ml-4 text-gray-800">Activity Logs</h2>
      </div>
      <div className="overflow-y-auto h-[calc(100vh-4rem)] bg-gray-50">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
            <div className="mr-3">
              {getIcon(activity.icon)}
            </div>
            <div>
              <p className="text-gray-800 font-semibold">{activity.user} {activity.action}</p>
              <p className="text-gray-600">{activity.target}</p>
              <span className="text-xs text-gray-500">{activity.timestamp}</span>
            </div>
          </div>
        ))}
        <div className='text-gray-500 pt-4 pb-20 text-center text-sm font-semibold'>
          All Activities Viewed
        </div>
      </div>
    </div>
  );
};

export default AdminActivityLog;