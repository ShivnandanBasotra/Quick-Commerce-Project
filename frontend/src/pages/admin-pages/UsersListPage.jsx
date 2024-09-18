import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isProfileDetailsOpenAtom from '../../atoms/adminUserProfileAtom';
import isEditingAtom from '../../atoms/adminUserlistAtom';
import { useSetRecoilState } from 'recoil';

export default function UsersListPage() {
    const users = [
        {id:149350395830, Name: "Shivnandan Basotra", Email: "flashbacksnaps9@gmail.com", Phone: 9149916061, 'Total Spend': 20200, 'Join On': '21-01-2024' },
        {id:249350395830, Name: "Abhi Basotra", Email: "abhi@gmail.com", Phone: 9103529764, 'Total Spend': 2400, 'Join On': '21-11-2024' },
        {id:349350395830, Name: "Shivnandan Basotra", Email: "flashbacksnaps9@gmail.com", Phone: 9149916061, 'Total Spend': 20200, 'Join On': '21-01-2024' },
        {id:449350395830, Name: "Abhi Basotra", Email: "abhi@gmail.com", Phone: 9103529764, 'Total Spend': 2400, 'Join On': '21-11-2024' },
        {id:549350395830, Name: "Shivnandan Basotra", Email: "flashbacksnaps9@gmail.com", Phone: 9149916061, 'Total Spend': 20200, 'Join On': '21-01-2024' },
        {id:649350395830, Name: "Abhi Basotra", Email: "abhi@gmail.com", Phone: 9103529764, 'Total Spend': 2400, 'Join On': '21-11-2024' },
        {id:749350395830, Name: "Shivnandan Basotra", Email: "flashbacksnaps9@gmail.com", Phone: 9149916061, 'Total Spend': 20200, 'Join On': '21-01-2024' },
        {id:849350395830, Name: "Abhi Basotra", Email: "abhi@gmail.com", Phone: 9103529764, 'Total Spend': 2400, 'Join On': '21-11-2024' },
    ];

    const [infoId, setInfoId] = useState(null);
    const navigate = useNavigate();
    const  setIsProfileDetailsOpen = useSetRecoilState(isProfileDetailsOpenAtom);
    const setIsEditing = useSetRecoilState(isEditingAtom);
    return (
        <div className="min-h-screen bg-gray-100 py-4">

            <div className="bg-white py-6 rounded-lg shadow-lg max-w-7xl mx-auto">
                <div className="flex justify-between mb-6 items-center px-6">
                    <div className="flex items-center space-x-2">
                        <label htmlFor="entries" className="text-gray-600 font-medium">Show</label>
                        <select
                            name="entries"
                            id="entries"
                            className="border border-gray-300 rounded-md px-3 py-1 text-gray-700"
                        >
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="All">All</option>
                        </select>
                        <span className="text-gray-600 font-medium">Entries</span>
                    </div>

                    <div className="flex items-center space-x-2">
                        <label htmlFor="searchUser" className="text-gray-600 font-medium">Search</label>
                        <input
                            type="text"
                            id="searchUser"
                            className="border border-gray-300 rounded-md px-4 py-1 text-gray-700"
                            placeholder="Search users..."
                        />
                    </div>
                </div>

                <div className="grid grid-cols-[50px,180px,180px,270px,1fr,1fr,1fr,1fr] gap-y-9 font-semibold text-green-700 border-b-2 py-2 bg-green-50 px-6">
                    <div>S.No</div>
                    <div>Id</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Phone</div>
                    <div>Total Spend</div>
                    <div>Join On</div>
                    <div>Actions</div>
                </div>

                {users.map((user, index) => (
                    <div onClick={()=>{navigate('/admin/user-profile')}} key={user.id} className="hover:bg-green-50 cursor-pointer grid grid-cols-[50px,180px,180px,270px,1fr,1fr,1fr,1fr] gap-y-9 border-b py-4 px-6 items-center relative">
                        <div>{index + 1}</div>
                        <div>{user.id}</div>
                        <div>{user.Name}</div>
                        <div>{user.Email}</div>
                        <div>{user.Phone}</div>
                        <div>{user['Total Spend']}</div>
                        <div>{user['Join On']}</div>
                        <div className=''>
                            <button onClick={(e)=>{setInfoId((prev)=>prev===user.id?null: user.id);e.stopPropagation()}} className="hover:bg-green-200 flex items-center border border-green-400 text-green-400 rounded-full">
                                <span className="flex items-center">
                                    <span className="font-medium px-3">Info</span>
                                </span>
                                <span className="flex justify-center items-center w-6 h-6 border-l border-green-400">
                                    <div className=''>
                                    {infoId===user.id?<ChevronUp className="w-4 h-4 text-green-400" />:<ChevronDown className="w-4 h-4 text-green-400" />}
                                    </div>
                                </span>
                            </button>
                            {infoId===user.id?<div className='bg-white right-2 absolute z-10 min-w-40 min-h-16'> <div onClick={(e)=>{navigate('/admin/user-profile');setIsEditing(true); setIsProfileDetailsOpen(true);e.stopPropagation()}} className='hover:bg-slate-100  px-4 py-2'>Edit</div> <div onClick={(e)=>{e.stopPropagation()}} className='hover:bg-slate-100  px-4 py-2'>Delete</div></div>:''}  
                        </div>
                    </div>
                ))}

                <div className="flex justify-between items-center mt-6 px-6">
                    <span className="text-sm text-gray-500 font-md">Showing <span className='font-bold'>1</span> to <span className='font-bold'>20</span> of 88 entries</span>
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md">Previous</button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md">1</button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md">2</button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-md">3</button>
                        <button className="bg-gray-200 text-gray-600 px-3 py-1 rounded-md">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
