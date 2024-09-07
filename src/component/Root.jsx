import { Outlet } from "react-router-dom";
import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";

function Root() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    const list = document.querySelector('div');
    setOpen(!isOpen);
    if (!isOpen) {
      list.classList.add('top-[80px]', 'opacity-100');
    } else {
      list.classList.remove('top-[80px]', 'opacity-100');
    }
  };
  

  return (
    <>
      <nav className="md:flex justify-between bg-yellow-400 items-center drop-shadow-xl ">
        <div className="flex justify-between items-center">
          <img src="./logo.png" className="w-40 p-4"></img>
          <div className="md:hidden block mx-6 " neme="menu" onClick={() => setOpen(!isOpen)}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div className={`md:flex md:justify-between md:w-2/3 z-[-1] md-z-auto md:static absolute bg-yellow-400 w-full left-0  md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 ${
            isOpen ? 'top-[80px] opacity-100' : 'top-[-400px] opacity-0'}`}>
          <ul
            className="md:flex md:items-center text-2xl font-bold text-rose-700  "
            id="navbar-hamburger"
          >
            <li className="my-6">
              <a
                href={"/Charname"}
                className="hover:text-neutral-50 duration-500 mx-6  md:my-0"
              >
                Character name
              </a>
            </li>
            <li className="my-6">
              <a
                href={`/Matching`}
                className="hover:text-neutral-50 duration-500 mx-6 my-6 md:my-0"
              >
                เกมส์จับคู่
              </a>
            </li>
          </ul>
          <ul className="md:flex mr-8 text-2xl font-bold text-rose-700 md:items-center mx-6 my-6 md:my-0">
            <li className="mr-8 my-6">
              <a
                href={`/Profile`}
                className="hover:text-neutral-50 duration-500 "
              >
                Profile
              </a>
            </li>
            <div className="w-12 h-12 rounded-full bg-white "></div>
          </ul>
        </div>
      </nav>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}



export default Root;
