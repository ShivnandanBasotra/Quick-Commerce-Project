import { atom } from "recoil";

const locationAtom = atom({
    key: "locationAtom",
    default: "",
});

const savedLocationsAtom = atom({
    key: "savedLoactionsAtom",
    default: ["3, Meleagrina Building , Linking Road, Bandra West, Mumbai, Maharashtra","3, Billawar road, opp to Dispensary, Dayalachack, kathua, Jammu"]
})

const showLocationsAtom = atom({
    key: "showLocationsAtom",
    default: false
})

export  {locationAtom, showLocationsAtom, savedLocationsAtom};