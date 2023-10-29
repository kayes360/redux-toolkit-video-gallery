import React from "react";
import Search from "./Search";
import SearchIcon from "../../assets/search.svg";
import Logo from "../../assets/Logo.gif";

export default function Navbar() {
  return (
    // navigation
    <nav className="bg-[#fcfcfc] shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between items-center py-3">
        <a href="/">
          <img className="h-24" src={Logo} alt="Learn with Sumit" />
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img
            className="inline h-4 cursor-pointer"
            src={SearchIcon}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
