import { atom } from "recoil";

const isEditingAtom = atom({
    key: "isEditingAtom",
    default: false,
})

export default isEditingAtom;