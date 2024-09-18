import { useState } from 'react'
import AdminProfileImg from '../../assets/adminProfilePic.jpg'
import { User, Mail, Phone, Building, Lock, Save, Edit2, Activity, Package, MessageCircle } from 'lucide-react'

export default function AdminProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold mb-8 text-green-700 text-center">Admin Profile</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Overview */}
          <div className="lg:col-span-2 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="p-8 flex flex-col md:flex-row items-center gap-6 border-b border-gray-200">
              <div className="w-32 h-32 border border-gray-200 shadow-sm rounded-full overflow-hidden">
                <img src={AdminProfileImg} alt="Admin" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-semibold text-green-700 mb-2">John Doe</h2>
                <p className="text-lg text-green-500">Super Admin</p>
              </div>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { icon: Mail, label: 'Email', value: 'john.doe@example.com' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: Building, label: 'Location', value: 'New York, USA' },
                  { icon: User, label: 'Joined', value: 'March 15, 2022' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <item.icon className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-green-600">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-800">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white shadow-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-6">Quick Stats</h2>
            <div className="space-y-6">
              {[
                { icon: Activity, label: 'Total Orders Processed', value: '1,234' },
                { icon: Package, label: 'Products Managed', value: '567' },
                { icon: MessageCircle, label: 'Customer Inquiries Resolved', value: '890' }
              ].map((stat, index) => (
                <div key={index} className="p-6 rounded-lg border border-gray-200 flex items-center space-x-4 bg-gray-50">
                  <div className="bg-white p-3 rounded-full shadow-sm">
                    <stat.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-green-600">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Edit Profile Form */}
          <div className="lg:col-span-2 bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="p-6 flex justify-between items-center border-b border-gray-200">
              <div>
                <h2 className="text-2xl font-semibold text-green-700">Edit Profile</h2>
                <p className="text-sm text-green-500">Update your admin profile information</p>
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
                    { id: 'location', label: 'Location', icon: Building, placeholder: 'New York, USA' }
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

          {/* Change Password */}
          <div className="bg-white shadow-sm rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Change Password</h2>
            <p className="text-gray-600 mb-6">Update your account password</p>
            <form className="space-y-6">
              {['Current Password', 'New Password', 'Confirm New Password'].map((label, index) => (
                <div key={index} className="space-y-2">
                  <label htmlFor={label.toLowerCase().replace(/\s/g, '')} className="text-green-700 font-medium">{label}</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-green-600" />
                    <input
                      id={label.toLowerCase().replace(/\s/g, '')}
                      type="password"
                      className="pl-10 border border-gray-300 focus:border-green-500 focus:ring-green-500 w-full rounded-md p-3 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </form>
            <div className="mt-8">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300">Update Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
