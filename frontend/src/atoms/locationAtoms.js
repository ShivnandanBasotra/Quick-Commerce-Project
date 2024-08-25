import { atom } from "recoil";

const locationAtom = atom({
    key: "locationAtom",
    default: "",
});

const showLocationsAtom = atom({
    key: "showLocationsAtom",
    default: false
})

export  {locationAtom, showLocationsAtom};