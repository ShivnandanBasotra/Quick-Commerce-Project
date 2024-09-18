import { atom } from "recoil";

const isNotificationsVisibleAtom = atom({
    key: "isNotificationsVisibleAtom",
    default: false,
})

export default isNotificationsVisibleAtom;