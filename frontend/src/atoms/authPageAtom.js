import { atom } from "recoil";

const userOnSignup = atom({
    key: "userSignup",
    default: true,
})

export default userOnSignup