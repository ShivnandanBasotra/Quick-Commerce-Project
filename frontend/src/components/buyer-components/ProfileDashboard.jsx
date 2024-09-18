import { useRecoilState, useSetRecoilState } from 'recoil';
import isProfileVisibleAtom from '../../atoms/profileAtom';
import maleProfileImg from "../../assets/profileMale.png";
import logoutIcon from "../../assets/logoutIcon.png"
import { useNavigate } from 'react-router-dom';
import isNotificationsVisibleAtom from '../../atoms/notificationsAtom';

export default function ProfileDashboard() {
    const navigate = useNavigate();
    const setIsProfileVisible = useSetRecoilState(isProfileVisibleAtom);
    const setIsNotificationsVisible = useSetRecoilState(isNotificationsVisibleAtom);
    
    return (
        <div className="h-screen w-full sm:w-[500px] fixed right-0 top-0 z-30 border-l border-gray-300 bg-white">
            <div className="sticky top-0 bg-white flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-300">
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12 rounded-full' src={maleProfileImg} alt="Profile" />
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg'>Aman Singh</span>
                        <span className='text-sm text-gray-500'>flashbacksnaps9@gmail.com</span>
                    </div>
                </div>
                <button onClick={() => setIsProfileVisible(false)} className="text-gray-600 font-extrabold text-2xl">
                    ✕
                </button>
            </div>
            <div className="overflow-y-auto h-[calc(100vh-4rem)] px-4 sm:px-6 py-4">
                <div className="space-y-6">
                    {/* ORDERS & STATEMENTS Section */}
                    <div className="space-y-1">
                        <div className="font-semibold text-sm text-gray-600">ORDERS & STATEMENTS</div>
                        <div className="border border-gray-200 rounded-lg">
                            <a onClick={()=>{navigate('/buyer/orders-page');setIsProfileVisible(false);}} className="cursor-pointer flex justify-between items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>📦</span>
                                    <span>Your orders</span>
                                </div>
                                <span>➡️</span>
                            </a>
                            <a onClick={()=>{navigate('/buyer/orders-history');setIsProfileVisible(false);}} className="cursor-pointer flex justify-between items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>📄</span>
                                    <span>Orders History </span>
                                </div>
                                <span>➡️</span>
                            </a>
                            <a onClick={()=>{navigate('/buyer/help');setIsProfileVisible(false);}} className="cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>💬</span>
                                    <span>Need help</span>
                                </div>
                                <span>➡️</span>
                            </a>
                        </div>
                    </div>

                    {/* WALLET & PAYMENT Section */}
                    <div className="space-y-1">
                        <div className="font-semibold text-sm text-gray-600">WALLET & PAYMENT</div>
                        <div className="border border-gray-200 rounded-lg">
                            <a onClick={()=>{navigate('/buyer/wallet');setIsProfileVisible(false);}} className="cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>💰</span>
                                    <span>Hyperpure wallet</span>
                                </div>
                                <span className="bg-teal-500 text-white px-3 py-1 rounded-full">₹300</span>
                            </a>
                        </div>
                    </div>

                    {/* OTHERS Section */}
                    <div className="space-y-1">
                        <div className="font-semibold text-sm text-gray-600">OTHERS</div>
                        <div className="border border-gray-200 rounded-lg">
                            <a onClick={()=>{navigate('/buyer/profile');setIsProfileVisible(false)}} className="cursor-pointer flex justify-between items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>⚙️</span>
                                    <span>Profile settings</span>
                                </div>
                                <span>➡️</span>
                            </a>
                            <a onClick={()=>{setIsProfileVisible(false);setIsNotificationsVisible(true)}} className="cursor-pointer flex justify-between items-center py-3 px-4 border-b border-gray-200 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>🔔</span>
                                    <span>Notifications</span>
                                </div>
                                <span>➡️</span>
                            </a>
                            <a onClick={()=>{navigate('/buyer/claim-coupon');setIsProfileVisible(false);}} className="cursor-pointer flex justify-between items-center py-3 px-4 hover:bg-gray-100">
                                <div className="flex items-center gap-2">
                                    <span>🏷️</span>
                                    <span>Claim coupon</span>
                                </div>
                                <span>➡️</span>
                            </a>
                        </div>
                    </div>

                    {/* Logout */}
                    <div className="border border-gray-200 rounded-lg">
                        <a href="#" className="cursor-pointer flex items-center py-3 px-4 hover:bg-gray-100">
                            <div className="flex items-center gap-2">
                                <img className='h-5' src={logoutIcon} alt="" />
                                <span className="text-red-600 font-semibold">Logout</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}