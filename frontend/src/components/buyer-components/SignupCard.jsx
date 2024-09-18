import { useSetRecoilState } from 'recoil';
import logoImage from '../../assets/sabzimandi.png'
import userOnSignup from '../../atoms/authPageAtom';

export default function SignupCard (){
    const setAuthSignupPage = useSetRecoilState(userOnSignup);
return(
    <section className="bg-white ">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
            <img className="w-40" src={logoImage} alt="sabzi mandi" />

            <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">sign Up</h1>

            <div className="relative flex items-center mt-8">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Username" />
            </div>

            <div className="relative flex items-center mt-5">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Full Name" />
            </div>

            <div className="relative flex items-center mt-5">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                </span>

                <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Email address" />
            </div>

            <div className="relative flex items-center mt-5">
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Password" />
            </div>

            <div className="mt-7">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    Sign Up
                </button>

                <div className="mt-6 text-center ">
                    <span onClick={()=>setAuthSignupPage(false)} className="text-sm -400 hover:underline text-green-400 cursor-pointer">
                        Already have an account? Log In
                    </span>
                </div>
            </div>
        </form>
    </div>
</section>
)
}