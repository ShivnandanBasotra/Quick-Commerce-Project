import { atom } from "recoil";

const isAdminActivityLogVisibleAtom = atom({
    key: "isAdminActivityLogVisible",
    default: false,
})

export default isAdminActivityLogVisibleAtom;