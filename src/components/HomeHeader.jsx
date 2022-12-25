import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-end px-5 items-center gap-4">
      <div className="flex gap-4">
        <span className="text-black/[0.87] text-[13px] line-height cursor-pointer hover:underline">
          Gmail
        </span>
        <span className="text-black/[0.87] text-[13px] line-height cursor-pointer hover:underline">
          Images
        </span>
      </div>
      <ProfileIcon/>
    </header>
  );
};

export default HomeHeader;
