import { atom } from "recoil";

const isProfileVisibleAtom = atom({
    key: "isProfileVisibleAtom",
    default: false,
})

export default isProfileVisibleAtom;