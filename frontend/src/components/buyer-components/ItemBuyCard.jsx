import onionImg from "../../assets/onion.jpg"
import heartBlackImg from "../../assets/heartBlack.png"
import heartRedImg from "../../assets/heartRed.png"
import { useRecoilState } from "recoil"
import isItemWhistlistedAtom from "../../atoms/isItemWishlistedAtom";
import { useNavigate } from "react-router-dom";


export default function ItemBuyCard() {
    const [isItemWishlisted, setIsItemWishlisted] = useRecoilState(isItemWhistlistedAtom);
    const navigate = useNavigate();
    return (
        <div onClick={()=>{navigate('/buyer/itemname/view')}} className="w-70 bg-white rounded-lg shadow-md p-4 cursor-pointer">
            <div className="flex justify-between">
                <img src={onionImg} alt="Onion Red" className="w-32 rounded-t-lg" />
                <div className="flex flex-col justify-between items-center h-24">
                    <div className=" bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded">28% OFF</div>
                    <div onClick={(e)=>{setIsItemWishlisted(prev=>!prev);e.stopPropagation()}} className="rounded-full border-2 border-slate-200 p-2 cursor-pointer">
                        <img className={"h-5 isItemWishlisted"} src={isItemWishlisted?heartRedImg:heartBlackImg} alt="heart" />
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold">Onion Red (New Crop, Premium, 55 mm+), 5 Kg</h3>
                <p className="text-gray-600 mt-1">5 kg</p>
            </div>
            <div className="mt-4">
                <div onClick={(e)=>{e.stopPropagation()}} className="flex justify-between items-center mb-2 bg-blue-50 p-2 rounded">
                    <span className="text-blue-600 font-semibold">₹43.44/kg for 25 kgs+</span>
                    <button className="text-red-500 font-bold">Add 5</button>
                </div>
                <div onClick={(e)=>{e.stopPropagation()}} className="flex justify-between items-center bg-blue-50 p-2 rounded">
                    <span className="text-blue-600 font-semibold">₹44.29/kg for 15 kgs+</span>
                    <button className="text-red-500 font-bold">Add 3</button>
                </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <span className="text-xl font-bold">₹225.57</span>
                    <span className="text-gray-500 line-through ml-2">₹301.3</span>
                    <p className="text-gray-500 text-sm">at ₹45.11/kg</p>
                </div>
                <div className="flex flex-col items-center">
                    <button onClick={(e)=>{e.stopPropagation()}} className="bg-[rgb(255,245,246)] text-red-500 font-bold border-2 border-red-500 px-3 py-0.4 rounded-lg">ADD <span className="ml-2">+</span></button>
                    <span className="text-sm font-medium text-slate-400">Min 2kg</span>
                </div>
            </div>
        </div>
    )
}