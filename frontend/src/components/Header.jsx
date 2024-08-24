import searchImg from "../assets/searchIcon.png"
import cartBlackImg from "../assets/cart.png"
import heartBlackImg from "../assets/heartBlack.png"
import notificationBellBlack from "../assets/bellBlack.png"
import maleProfileImg from "../assets/profileMale.png"

export function Header (){
    return (

         <div className="flex justify-between bg-white p-4 rounded-b-3xl items-center sticky top-0 z-40" >

         <div className="flex gap-5 items-center">
             <h1 className="text-3xl font-bold">Sabzi Mandi</h1>
             <button className="border-2 hover:border-black border-transparent"><div>Delivering to Dhalli</div>Change Address</button>
         </div>

         <div className="flex w-8/12 items-center gap-4">
             <div className="flex w-9/12  items-center">
                 <input className="w-11/12 rounded-3xl font-normal text-lg placeholder:font-semibold placeholder:text-lg placeholder:text-slate-300 bg-slate-50 h-12 p-4" type="text" placeholder="Search items or categories" />
                 <button><img src={searchImg} alt="search Icon" /></button>
             </div> 
             <div className="cursor-pointer"> 
                 <img className="w-12" src={cartBlackImg} alt="cart"/>
             </div>
             <div className="cursor-pointer">
                 <img className="w-12" src={heartBlackImg} alt="heart" />
             </div>
             <div className="cursor-pointer">
                 <img className="w-12" src={notificationBellBlack} alt="notification bell" />
             </div>
             <div className="cursor-pointer">
                 <img className="w-12" src={maleProfileImg} alt="profile"/>
             </div>
         </div>
     </div>
    )
}

