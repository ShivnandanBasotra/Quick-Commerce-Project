import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Mail, Lock } from 'lucide-react';
import logoImage from '../../assets/sabzimandi.png';
import userOnSignup from '../../atoms/authPageAtom';

export default function LoginCard() {
    const setAuthSignupPage = useSetRecoilState(userOnSignup);

    return (
        <section className="bg-white">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md">
                    <img className="w-40" src={logoImage} alt="sabzi mandi logo" />
                    
                    <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">Log In</h1>
                    
                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <Mail className="w-6 h-6 mx-3 text-gray-300" />
                        </span>
                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Email address" />
                    </div>
                    
                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <Lock className="w-6 h-6 mx-3 text-gray-300" />
                        </span>
                        <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Password" />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                            Log in
                        </button>
                        
                        <div className="mt-6 text-center">
                            <span onClick={() => setAuthSignupPage(true)} className="text-sm text-green-400 hover:underline cursor-pointer">
                                Don't have an account yet? Sign up
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}