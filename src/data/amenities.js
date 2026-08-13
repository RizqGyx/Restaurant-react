import {
  MdOutlineDeck,
  MdOutlineLocalParking,
  MdOutlineAccessible,
  MdOutlineChildCare,
  MdOutlineFireplace,
} from "react-icons/md";
import { LuMusic4, LuWine, LuDoorOpen } from "react-icons/lu";
import { IoWifiOutline } from "react-icons/io5";
import { TbGlassFull, TbDog, TbCar } from "react-icons/tb";

export const AMENITIES = {
  outdoor: { label: "Outdoor terrace", icon: MdOutlineDeck },
  "live-music": { label: "Live music", icon: LuMusic4 },
  bar: { label: "Full bar", icon: TbGlassFull },
  parking: { label: "On-site parking", icon: MdOutlineLocalParking },
  valet: { label: "Valet service", icon: TbCar },
  wifi: { label: "Free Wi-Fi", icon: IoWifiOutline },
  "private-room": { label: "Private dining room", icon: LuDoorOpen },
  kids: { label: "Kid friendly", icon: MdOutlineChildCare },
  wheelchair: { label: "Step-free access", icon: MdOutlineAccessible },
  "pet-friendly": { label: "Dogs welcome", icon: TbDog },
  fireplace: { label: "Open fireplace", icon: MdOutlineFireplace },
  "wine-cellar": { label: "Wine cellar", icon: LuWine },
};

export const getAmenity = (key) => AMENITIES[key] ?? { label: key, icon: TbGlassFull };
