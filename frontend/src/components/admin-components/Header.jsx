import notificationBellBlack from "../../assets/bellBlack.png";
import settingsImg from "../../assets/settings.png";
import { useSetRecoilState } from "recoil";
import isAdminNotificationsVisibleAtom from "../../atoms/adminNotificationsAtom";
import { CirclePlus, ClipboardList, Lock, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import isAdminActivityLogVisible from "../../atoms/adminAcitivityLogAtom";

export default function Header() {
  const setIsNotificationVisible = useSetRecoilState(isAdminNotificationsVisibleAtom);
  const setIsActivityLogVisible = useSetRecoilState(isAdminActivityLogVisible);
  const navigate = useNavigate();
  return (
    <div className="h-20 w-full bg-white p-4 sticky top-0 z-10 border-b">
      <div className="flex w-full justify-between items-center gap-4 relative">
       
        <div className="pl-9 text-4xl font-semibold text-red-500 flex items-center gap-9">
          <h1>Users List</h1>
          <button onClick={()=>{navigate('/admin/add-product')}} className="cursor-pointer ml-4 flex items-center bg-red-500 rounded-xl py-2 px-2 text-white gap-0.5 hover:bg-red-700 text-xs font-bold"><CirclePlus/> Add Product</button>
        </div>

        {/* Icons */}
        <div className="flex gap-4">
          <div  onClick={() => setIsNotificationVisible((prev) => !prev)} className="p-3 cursor-pointer border border-slate-400 rounded-full">
            <img className="w-8" src={notificationBellBlack} alt="cart" />
          </div>
          <div className="p-3 cursor-pointer border border-slate-400 rounded-full relative group">
            <img className="w-8" src={settingsImg} alt="settings" />

            {/* Pop-up positioned relative to the settings button */}
            <div className="hidden group-hover:block absolute right-0 w-48 bg-white border border-gray-300 shadow-md rounded-md z-20">
              <ul>
                <li onClick={()=>{navigate('/admin/profile')}} className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                  <User className="mr-2 h-4 w-4" />
                  <span>Visit Profile</span>
                </li>
                <li onClick={()=>{navigate('/admin/change-password')}} className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                  <Lock className="mr-2 h-4 w-4" />
                  <span>Change Password</span>
                </li>
                <li onClick={() => setIsActivityLogVisible((prev) => !prev)} className="flex items-center p-3 cursor-pointer hover:bg-gray-100">
                  <ClipboardList className="mr-2 h-4 w-4" />
                  <span>Activity Logs</span>
                </li>
                <li className="flex items-center p-3 cursor-pointer hover:bg-gray-100 border-t">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
