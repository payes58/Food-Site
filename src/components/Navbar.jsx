import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { MdHelp, MdFavorite, MdSettingsAccessibility } from "react-icons/md";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { useState } from "react";

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 ">
          Best <span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 focus:outline-none w-full rounded-full"
          type="text"
          placeholder="Search foods"
        />
      </div>
      <button className="bg-black text-white hidden md:flex items-center py-2 ">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>
      {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>:""}

      <div className={nav ? "fixed bg-white z-10 duration-300 top-0 left-0 w-[300px] h-screen": "fixed bg-white z-10 duration-300 top-0 left-[-100%] w-[300px] h-screen"}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold">
          Best <span>Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col px-4 text-gray-800 font-semibold">
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <TbTruckDelivery size={25} className="mr-4" />
              Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <MdFavorite size={25} className="mr-4" />
              Favorites
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <FaWallet size={25} className="mr-4" />
              Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <MdHelp size={25} className="mr-4" />
              Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <AiFillTag size={25} className="mr-4" />
              Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:text-orange-500">
              <FaUserFriends size={25} className="mr-4" />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
