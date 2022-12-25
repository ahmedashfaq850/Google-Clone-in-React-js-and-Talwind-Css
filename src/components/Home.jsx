import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
  return (
    <div className="flex h-[100vh] flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-[50px]">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="logo" />
          <SearchInput />
          <div className="flex gap-2 mt-8 text-[#3c4043]">
            <button className="h-9 px-4 bg-[#f8f9fa] rounded-md text-sm border border-[#f8f9fa] hover:border-[#dadce0]">
              Google Search
            </button>
            <button className="h-9 px-4 bg-[#f8f9fa] rounded-md text-sm border border-[#f8f9fa] hover:border-[#dadce0]">
              I'm Feeling Happy
            </button>
          </div>
          <p className="mt-5 text-sm text-[#1a0dab]">
            <span className="text-red-500 font-bold">Santa's on his way!</span>{" "}
            Follow his journey around the world
          </p>
          <p className="mt-8 text-[#1a0dab]">
            <span className="mt-8 text-gray-600">Google offered in:</span>
            <span className="text-sm ml-2">اردو پښتو سنڌي</span>
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
