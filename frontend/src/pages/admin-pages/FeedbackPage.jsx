import React, { useState } from 'react';
import { Search } from 'lucide-react';

const feedbackData = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', subject: 'Product Inquiry', feedback: 'I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? ' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', subject: 'Website Suggestion', feedback: 'The website is great, but I think the navigation could be improved.' },
  { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', subject: 'Customer Support', feedback: 'Your support team was incredibly helpful. Thank you!I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line? ' },
  { id: 4, name: 'John Doe', email: 'john.doe@example.com', subject: 'Product Inquiry', feedback: 'I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? ' },
  { id: 5, name: 'Jane Smith', email: 'jane.smith@example.com', subject: 'Website Suggestion', feedback: 'The website is great, but I think the navigation could be improved.' },
  { id: 6, name: 'Bob Johnson', email: 'bob.johnson@example.com', subject: 'Customer Support', feedback: 'Your support team was incredibly helpful. Thank you!I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line? I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line?I love your products! Can you provide more details about the new line? ' },
];

const FeedbacksPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [isMarkedRead, setIsMarkedRead] = useState(null);
  const [isMarkedReplied, setIsMarkedReplied] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-green-600 px-6 py-4 sticky top-0">
          <h2 className="text-3xl font-bold text-center text-white tracking-wide">User Feedback</h2>
        </div>
        <div className="p-6">
          <div className="mb-6 relative">
            <input
              type="text"
              placeholder="Search feedbacks..."
              className="w-full px-4 py-2 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={20} />
          </div>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {feedbackData.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg">
                <div 
                  onClick={() => setExpandedId(prevId => prevId === item.id ? null : item.id)} 
                  className="px-4 py-3 bg-green-500 text-white cursor-pointer transition-colors duration-300 hover:bg-green-600"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">{item.subject}</span>
                    <span className="text-sm transition-transform duration-300 ease-in-out transform">
                      {expandedId === item.id ? '▲' : '▼'}
                    </span>
                  </div>
                  <div className="mt-1 text-sm flex items-center justify-between">
                    <div>
                      <span className="font-medium">{item.name}</span> - <span className="italic">{item.email}</span>
                    </div>
                    <div className="flex space-x-2">
                      {isMarkedRead === item.id && <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1">Read</span>}
                      {isMarkedReplied === item.id && <span className="bg-yellow-500 text-white text-xs rounded-full px-2 py-1">Replied</span>}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 text-gray-700">
                  <p className={`${expandedId === item.id ? '' : 'line-clamp-1'}`}>{item.feedback}</p>
                  {expandedId === item.id && (
                    <div className="mt-4 flex justify-end space-x-4">
                      <button 
                        onClick={() => setIsMarkedRead(prev => prev === item.id ? null : item.id)} 
                        className={`px-4 py-2 rounded-full transition-colors duration-300 ${isMarkedRead === item.id ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}
                      >
                        {isMarkedRead === item.id ? 'Mark as unread' : 'Mark as read'}
                      </button>
                      <button 
                        onClick={() => setIsMarkedReplied(prev => prev === item.id ? null : item.id)} 
                        className={`px-4 py-2 rounded-full transition-colors duration-300 ${isMarkedReplied === item.id ? 'bg-yellow-500 text-white' : 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200'}`}
                      >
                        {isMarkedReplied === item.id ? 'Mark as not replied' : 'Mark as replied'}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {feedbackData.length === 0 && (
            <div className='text-gray-500 font-semibold text-center py-9'>No feedbacks found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbacksPage;