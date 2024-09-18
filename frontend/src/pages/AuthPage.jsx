import { useRecoilValue } from "recoil";
import LoginCard  from "../components/buyer-components/LoginCard";
import  SignupCard  from "../components/buyer-components/SignupCard";
import userOnSignup from "../atoms/authPageAtom";

export default function AuthPage (){
    const isOnSignupPage = useRecoilValue(userOnSignup);
    return(
    isOnSignupPage? <SignupCard/>:<LoginCard/> 
    )
}