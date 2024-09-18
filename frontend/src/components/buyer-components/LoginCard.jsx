import { useSetRecoilState } from 'recoil'
import logoImage from '../../assets/sabzimandi.png'
import userOnSignup from '../../atoms/authPageAtom';
export default function LoginCard (){
    const setAuthSignupPage = useSetRecoilState(userOnSignup);
    return(
        <section className="bg-white ">
            <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form className="w-full max-w-md">
                    <img className="w-40" src={logoImage} alt="" />

                    <h1 className="mt-1 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl ">log In</h1>

                    <div className="relative flex items-center mt-8">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  -300  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Username" />
                    </div>

                    <div className="relative flex items-center mt-4">
                        <span className="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Password" />
                    </div>

                    <div className="mt-6">
                        <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
                            Log in
                        </button>

                        <div className="mt-6 text-center ">
                            <span onClick={()=>setAuthSignupPage(true)} className="text-sm text-green-400 hover:underline cursor-pointer">
                                Don’t have an account yet? Sign up
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}