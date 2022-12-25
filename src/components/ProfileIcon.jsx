import { TbGridDots } from "react-icons/tb";

import Profile from "../assets/avatar.jpg";
import ProfileRing from "../assets/profile-ring.svg";

const ProfileIcon = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
        <TbGridDots size={20} color="#5f6368" />
      </span>
      <span className="h-8 w-8 rounded-full overflow-hidden">
            <img className="h-full w-full object-cover" src={Profile} alt="avatar"/>
        </span>
    </div>
  );
};

export default ProfileIcon;
