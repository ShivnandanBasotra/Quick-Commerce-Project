import { useSetRecoilState } from 'recoil';
import isAdminNotificationsVisibleAtom from '../../atoms/adminNotificationsAtom';
import { X, Package, Truck, XCircle, CheckCircle, RefreshCcw, CreditCard, ShoppingCart } from 'lucide-react'; // Importing colorful icons

export default function AdminNotificationBar() {
    const setIsAdminNotificationsVisible = useSetRecoilState(isAdminNotificationsVisibleAtom);

    return (
        <div className="h-screen w-96 bg-white fixed right-0 top-0 z-30 shadow-lg">
            <div className="sticky top-0 bg-gray-100 flex items-center px-4 py-6 border-b border-gray-300">
                <button 
                    onClick={() => { setIsAdminNotificationsVisible(false); }} 
                    className="text-gray-600 hover:text-red-600 transition-all">
                    <X size={24} /> {/* Close icon */}
                </button>
                <h2 className="text-xl font-semibold ml-4 text-gray-800">Admin Notifications</h2>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-4rem)] bg-gray-50">
                {/* Notification: Order Placed */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <ShoppingCart className="text-green-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Order Placed</p>
                        <p className="text-gray-600">Order #1234 was placed successfully.</p>
                        <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                </div>

                {/* Notification: Order Shipped */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <Truck className="text-yellow-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Order Shipped</p>
                        <p className="text-gray-600">Order #1234 has been shipped.</p>
                        <span className="text-xs text-gray-500">1 day ago</span>
                    </div>
                </div>

                {/* Notification: Order Delivered */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <CheckCircle className="text-blue-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Order Delivered</p>
                        <p className="text-gray-600">Order #1234 was delivered to the customer.</p>
                        <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                </div>

                {/* Notification: Order Cancelled */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <XCircle className="text-red-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Order Cancelled</p>
                        <p className="text-gray-600">Order #5678 has been cancelled by the customer.</p>
                        <span className="text-xs text-gray-500">3 days ago</span>
                    </div>
                </div>

                {/* Notification: Return Requested */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <RefreshCcw className="text-purple-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Return Requested</p>
                        <p className="text-gray-600">User requested a return for Order #5678.</p>
                        <span className="text-xs text-gray-500">5 days ago</span>
                    </div>
                </div>

                {/* Notification: Payment Successful */}
                <div className="p-4 bg-white border-b border-gray-200 cursor-pointer hover:bg-gray-100 flex items-start transition-all">
                    <CreditCard className="text-teal-500 mr-3" size={24} />
                    <div>
                        <p className="text-gray-800 font-semibold">Payment Successful</p>
                        <p className="text-gray-600">Payment for Order #7890 was successful.</p>
                        <span className="text-xs text-gray-500">6 days ago</span>
                    </div>
                </div>

                {/* All Notifications Viewed */}
                <div className='text-gray-500 pt-4 pb-20 text-center text-sm font-semibold'>
                    All Notifications Viewed
                </div>
            </div>
        </div>
    );
}
