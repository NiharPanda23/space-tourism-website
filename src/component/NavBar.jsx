import { useState } from "react";
import { images } from "../constants";

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const handelIconChange = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex justify-between mx-4 my-4 overflow-y-auto md:mx-0 md:my-0 lg:my-8">
        <div>
          <img className="w-7 h-7 md:w-10 md:h-10 md:mt-8 md:ml-4  lg:w-12 lg:h-12 lg:mt-6 xl:ml-8" src={images.logo} alt="logo" />
        </div>
        <div className="hidden lg:flex lg:w-[22rem]  lg:h-[1px] lg:my-auto lg:bg-slate-300 lg:backdrop-blur-2xl lg:backdrop-contrast-100 lg:backdrop-brightness-150 lg:ml-4 xl:w-[54rem] xl:ml-20"></div>
        <div className="hidden md:flex lg:flex  md:bg-transparent md:backdrop-blur-2xl md:backdrop-contrast-75 md:backdrop-brightness-150 text-light-0 md:font-Barlow md:uppercase  md:w-[33rem] md:text-xl md:h-24  lg:w-[54rem] lg:text-2xl  lg:bg-transparent lg:backdrop-blur-2xl lg:backdrop-contrast-75 lg:backdrop-brightness-150">
          <ul className="flex justify-between md:flex md:justify-between md:space-x-6 md:mx-3 my-auto lg:ml-20 lg:space-x-8 xl:space-x-14">
            <li className="md:tracking-widest md:cursor-pointer md:hover:underline md:hover:underline-offset-[34px] md:hover:decoration-2 lg:hover:decoration-4"><a href="#home">00 Home</a></li>
            <li className="md:tracking-widest md:cursor-pointer md:hover:underline md:hover:underline-offset-[34px] md:hover:decoration-2 lg:hover:decoration-4"><a href="#destination">01 Destination</a></li>
            <li className="md:tracking-widest md:cursor-pointer md:hover:underline md:hover:underline-offset-[34px] md:hover:decoration-2 lg:hover:decoration-4"><a href="#crew">02 Crew</a></li>
            <li className="md:tracking-widest md:cursor-pointer md:hover:underline md:hover:underline-offset-[34px] md:hover:decoration-2 lg:hover:decoration-4"><a href="#technology">03 Technology</a></li>
          </ul>
        </div>
        <div className="lg:hidden md:hidden" onClick={handelIconChange}>
          {open === true ? (
            <img className="h-5 w-5" src={images.menu} alt="Menu" />
          ) : (
            <img className="h-5 w-5" src={images.close} alt="Close" />
          )}
        </div>
      </div>
      <div>
        {!open && (
          <div className="fixed bg-transparent backdrop-blur-2xl backdrop-contrast-100 backdrop-brightness-125 flex flex-col right-0 w-64 h-screen top-0">
            <div className="mt-16 w-full active:border-r-4 mb-2 font-Barlow tracking-widest uppercase hover:border-r-4 hover:border-slate-300">
              <a href="#home" className="text-light-0 mx-8 transition-all ease-in-out">00 Home</a>
            </div>
            <div className="w-full active:border-r-4 my-2 font-Barlow tracking-widest uppercase hover:border-r-4 hover:border-slate-300">
              <a href="#destination" className="text-light-0 mx-8 transition-all ease-in-out">01 Destination</a>
            </div>
            <div className="w-full active:border-r-4 my-2 font-Barlow tracking-widest uppercase hover:border-r-4 hover:border-slate-300">
              <a href="#crew" className="text-light-0 mx-8 transition-all ease-in-out">02 Crew</a>
            </div>
            <div className="w-full active:border-r-4 my-2 font-Barlow tracking-widest uppercase hover:border-r-4 hover:border-slate-300">
              <a href="#technology" className="text-light-0 mx-8 transition-all ease-in-out">03 Technology</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
