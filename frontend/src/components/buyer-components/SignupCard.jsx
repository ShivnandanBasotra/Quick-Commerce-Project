import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Mail, User, Lock, Phone } from 'lucide-react';
import logoImage from '../../assets/sabzimandi.png';
import userOnSignup from '../../atoms/authPageAtom';

export default function SignupCard() {
  const setAuthSignupPage = useSetRecoilState(userOnSignup);

  return (
    <section className="bg-white">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
          <img className="w-40" src={logoImage} alt="sabzi mandi" />
          
          <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">Sign Up</h1>
          
          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Mail className="w-6 h-6 mx-3 text-gray-300" />
            </span>
            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Email address" />
          </div>

          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Phone className="w-6 h-6 mx-3 text-gray-300" />
            </span>
            <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Mobile Number" />
          </div>
          
          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <User className="w-6 h-6 mx-3 text-gray-300" />
            </span>
            <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Full Name" />
          </div>
          
          <div className="relative flex items-center mt-5">
            <span className="absolute">
              <Lock className="w-6 h-6 mx-3 text-gray-300" />
            </span>
            <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Password" />
          </div>
          
          <div className="mt-7">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
              Sign Up
            </button>
            
            <div className="mt-6 text-center">
              <span onClick={() => setAuthSignupPage(false)} className="text-sm text-green-400 hover:underline cursor-pointer">
                Already have an account? Log In
              </span>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}