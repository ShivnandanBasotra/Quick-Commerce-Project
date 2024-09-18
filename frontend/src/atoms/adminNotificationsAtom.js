import { atom } from "recoil";

const isAdminNotificationsVisibleAtom = atom({
    key: "isAdminNotificationsVisible",
    default: false,
})

export default isAdminNotificationsVisibleAtom;