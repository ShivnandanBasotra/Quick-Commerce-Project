import emptyCartImg from "../assets/emptyCart.png"
import deleteImg from "../assets/delete.png"
import onionImg from "../assets/onion.jpg"
import redPlusImg from "../assets/redPlus.png"
import redMinusImg from "../assets/redMinus.png"
import { useRecoilValue } from "recoil"
import { cardItemsAtom } from "../atoms/cardItemsAtom"

export default function CardPage() {
    const cardItems = useRecoilValue(cardItemsAtom);
    return (
        <div>
            {!cardItems && <div className="mt-16 box-border flex flex-col items-center h-[calc(100vh-96px-4rem)] space-around gap-3 ">
                <img className="h-96" src={emptyCartImg} alt="" />
                <p className="text-slate-500 text-lg font-semibold">Your cart is empty!</p>
                <button className="bg-red-600 hover:bg-red-800 px-3 py-2 rounded-lg text-white font-semibold text-lg">Start Shopping</button>
            </div>}

            {cardItems && <div className="min-h-[calc(100vh-96px)] mt-9">
                <div className="mx-auto w-1170 flex gap-8 items-start">
                    {/* Items card */}
                    <div className="w-680">
                        <div className="p-5 flex justify-between items-center text-3xl font-bold">
                            <span>1 items in cart</span>
                            <button className="bg-white p-3 rounded-full"><img className="w-5 h-5" src={deleteImg} alt="" /></button>
                        </div>
                        <div className="bg-white rounded-3xl shadow-md w-680">
                            <h2 className="text-lg font-bold py-4 px-6 text-gray-500 mb-4 border-b">Fruits(2) & Vegetables (3)</h2>
                            <div className="space-y-4 px-6 pb-6">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={onionImg} alt="American Sweet Corn, 1 Pc" className="w-12 h-12" />
                                        <div>
                                            <h3 className="font-medium">American Sweet Corn, 1 Pc</h3>
                                            <p className="text-sm text-gray-500 font-medium">6 pc</p>
                                            <p className="text-green-700 font-md font-medium text-sm"><span className="text-black">₹89.04</span><span className="text-gray-600">.</span> Savings ₹7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="border border-red-500 rounded">
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redMinusImg} alt="" /></button>
                                            <span className="font-semibold px-3 py-2">6</span>
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redPlusImg} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={onionImg} alt="American Sweet Corn, 1 Pc" className="w-12 h-12" />
                                        <div>
                                            <h3 className="font-medium">American Sweet Corn, 1 Pc</h3>
                                            <p className="text-sm text-gray-500 font-medium">6 pc</p>
                                            <p className="text-green-700 font-md font-medium text-sm"><span className="text-black">₹89.04</span><span className="text-gray-600">.</span> Savings ₹7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="border border-red-500 rounded">
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redMinusImg} alt="" /></button>
                                            <span className="font-semibold px-3 py-2">6</span>
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redPlusImg} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={onionImg} alt="American Sweet Corn, 1 Pc" className="w-12 h-12" />
                                        <div>
                                            <h3 className="font-medium">American Sweet Corn, 1 Pc</h3>
                                            <p className="text-sm text-gray-500 font-medium">6 pc</p>
                                            <p className="text-green-700 font-md font-medium text-sm"><span className="text-black">₹89.04</span><span className="text-gray-600">.</span> Savings ₹7</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="border border-red-500 rounded">
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redMinusImg} alt="" /></button>
                                            <span className="font-semibold px-3 py-2">6</span>
                                            <button className="px-2 py-2 bg-red-50 text-red-500 rounded"><img className="w-4" src={redPlusImg} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Checkout box */}
                    <div className="py-6 text-lg bg-white rounded-2xl shadow-lg w-96 sticky top-28">
                        <div className="px-5 flex justify-between items-center mb-4">
                            <span className="text-blue-500">💸 Saving ₹290 on this order</span>
                        </div>
                        <div className="border-t-2">
                            <div className="px-5 py-1 flex justify-between">
                                <span className="text-gray-600">Item total</span>
                                <span>₹4,644</span>
                            </div>
                            <div className="px-5 py-1 flex justify-between">
                                <span className="text-gray-600">Product discount</span>
                                <span className="text-green-600">- ₹289.97</span>
                            </div>
                            <div className="px-5 py-1 flex justify-between">
                                <span className="text-gray-600">GST + Cess</span>
                                <span>₹0</span>
                            </div>
                            <div className="px-5 py-1 flex justify-between">
                                <span className="text-gray-600">Delivery charge</span>
                                <span className="text-green-600">FREE</span>
                            </div>
                        </div>

                        <div className="px-5 mt-3 pt-3 border-t-2 flex justify-between font-bold">
                            <span>Total</span>
                            <span className="text-xl">₹4,354.03</span>
                        </div>
                        <div className="px-5">
                            <button className="w-full mt-4 bg-red-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-red-700">
                                <div className="flex justify-between">
                                    <span>Checkout</span>
                                    <span>&gt;</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}