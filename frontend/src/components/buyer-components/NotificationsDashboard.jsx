import { useSetRecoilState } from 'recoil';
import isNotificationVisibleAtom from '../../atoms/notificationsAtom';

export default function NotificationDashboard() {
    const setIsNotificationsVisible = useSetRecoilState(isNotificationVisibleAtom);
  
    return (
        <div className="h-screen w-full sm:w-[500px] bg-white fixed right-0 top-0 z-30">
            <div className="sticky top-0 bg-white flex items-center px-4 py-6 border-b border-gray-300">
                <button onClick={() => {setIsNotificationsVisible(false)}} className="text-gray-600 font-extrabold text-xl">
                    ✕
                </button>
                <h2 className="text-xl font-semibold ml-4">Notifications</h2>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-4rem)] bg-white">
                {/* Notification items remain unchanged */}
                <div className="p-4 bg-slate-100 border-b border-gray-300 cursor-pointer hover:bg-slate-200">
                    <p className="text-gray-700 font-medium">🙏 Janmashtami offers 🛒🌼</p>
                    <p className="text-gray-500">Shop dry fruits, dairy, oils, fruits & more at special prices 👇</p>
                    <span className="text-xs text-gray-400">19 hours ago</span>
                </div>
                {/* More notification items... */}
                <div className='text-black pt-4 pb-20 text-center text-slate-400 text-sm font-semibold'>All Notifications Viewed</div>
            </div>
        </div>
    );
}