import { useState } from 'react';
import { Mail, Lock, Save } from 'lucide-react';

export default function ChangePasswordPage() {
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [email, setEmail] = useState('john.doe@example.com');
  const [password, setPassword] = useState({ current: '', new: '', confirm: '' });

  const handleEmailChange = () => {
    setIsEditingEmail(false);
  };

  const handlePasswordChange = () => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg space-y-8">
        {/* Email Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">Email Address</h2>
          </div>
          <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border border-green-200">
            <div className="flex items-center space-x-4">
              <Mail className="text-green-600 w-6 h-6" />
              {isEditingEmail ? (
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-800 px-3 py-2 rounded-md border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                  placeholder="Enter new email"
                />
              ) : (
                <span className="text-lg font-medium text-gray-800">{email}</span>
              )}
            </div>
            {isEditingEmail ? (
              <div className="flex space-x-2">
                <button
                  onClick={handleEmailChange}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditingEmail(false)}
                  className="bg-white border border-green-300 text-green-700 hover:bg-green-50 px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditingEmail(true)}
                className="bg-white border border-green-300 text-green-700 hover:bg-green-50 px-3 py-1 rounded-md text-sm font-semibold transition-colors duration-300"
              >
                Edit
              </button>
            )}
          </div>
        </div>

        {/* Password Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Change Password</h2>
          {['Current Password', 'New Password', 'Confirm New Password'].map((label, index) => (
            <div key={index} className="space-y-2">
              <label htmlFor={label.toLowerCase().replace(/\s/g, '')} className="text-gray-800 font-medium">{label}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-green-600" />
                <input
                  id={label.toLowerCase().replace(/\s/g, '')}
                  type="password"
                  value={password[label.toLowerCase().split(' ')[0]]}
                  onChange={(e) => setPassword({ ...password, [label.toLowerCase().split(' ')[0]]: e.target.value })}
                  className="pl-12 border border-green-300 focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-400 w-full rounded-md py-2 transition-all duration-300"
                  placeholder={`Enter ${label.toLowerCase()}`}
                />
              </div>
            </div>
          ))}

          <button
            onClick={handlePasswordChange}
            className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center"
          >
            <Save className="w-5 h-5 mr-2" />
            Update Password
          </button>
        </div>
      </div>
    </div>
  );
}