import { useState } from "react";
import { images } from "../constants";
import data from "../data.json";

const Technologies = () => {
  const [name, setName] = useState("");

  function onclickHandler(e) {
    const value = e.target.textContent;
    setName(value);
    console.log(name);
  }

  return (
    <div className="w-full bg-cover h-screen bg-no-repeat flex flex-col text-light-0 tech">
      {name === "" ? (
        <>
          <h1 className="text-light-0 mt-20 font-Barlow text-center mb-10 text-[18px] tracking-[0.16em] uppercase md:mt-36 md:ml-16 md:text-left md:text-[20px] lg:text-[28px] lg:mt-36 lg:ml-[7.5rem] xl:mt-44 xl:ml-40">
            <span className="mr-2 text-[18px] text-slate-600 font-bold md:text-[20px] lg:text-[28px]">
              03
            </span>
            SPACE LAUNCH 101
          </h1>
          <div className="text-light-0 lg:flex lg:flex-row-reverse lg:ml-14 lg:justify-between xl:mx-48">
            <div className="flex lg:w-1/2 lg:mt-20">
              <img
                className="w-full h-52 mx-auto md:w-full md:h-56 lg:hidden"
                src={images.vehiclel}
                alt="Moon"
              />
              <img
                className=" hidden   lg:flex lg:w-[512px] lg:h-[527px] lg:-mt-32"
                src={images.vehiclep}
                alt="Moon"
              />
            </div>
            <div className="mx-10 md:mx-16 lg:mx-10 lg:w-1/2 xl:px-14 md:px-0 lg:flex lg:flex-row lg:px-0">
              <div className="flex justify-center space-x-4 mb-9 md:mb-9 md:mt-4 lg:flex-col lg:mr-8 lg:space-y-4 lg:space-x-0">
                <div
                  className="w-11 h-11 border lg:w-[80px] lg:h-[80px] border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                  onClick={onclickHandler}
                  value="Launch vehicle"
                >
                  <span className="mx-auto my-auto"></span>
                  <div className="hidden ">Launch vehicle</div>
                </div>
                <div
                  className="w-11 h-11 border lg:w-[80px] lg:h-[80px] border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                  onClick={onclickHandler}
                  value="Spaceport"
                >
                  <span className="mx-auto my-auto"></span>
                  <div className="hidden">Spaceport</div>
                </div>
                <div
                  className="w-11 h-11 border lg:w-[80px] lg:h-[80px] border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                  onClick={onclickHandler}
                  value="Space capsule"
                >
                  <span className="mx-auto my-auto"></span>
                  <div className="hidden">Space capsule</div>
                </div>
              </div>
              <div>
                    <h2 className="text-[16px] text-lavender-0 text-center font-Bellefair uppercase md:text-[16px] lg:text-left lg:mt-28">
                      THE TERMINOLOGY…
                    </h2>
                    <h1 className="text-[24px] text-center font-Bellefair uppercase my-4 md:mt-0 md:mb-1 md:text-[40px] lg:text-left">
                      LAUNCH VEHICLE
                    </h1>
                    <p className="text-center tracking-wide leading-6 text-[14px] md:text-[16px] md:leading-7 text-lavender-0 lg:text-left lg:text-[16px]">
                      A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, 
                      usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. 
                      Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
                    </p>
                  </div>
            </div>
          </div>
        </>
      ) : (
        data.technology
          .filter((technologies) => technologies.name === name)
          .map((filteredTechnology) => (
            <>
              <h1 className="text-light-0 mt-20 font-Barlow text-center mb-10 text-[18px] tracking-[0.16em] uppercase md:mt-36 md:ml-16 md:text-left md:text-[20px] lg:text-[28px] lg:mt-36 lg:ml-[7.5rem] xl:mt-44 xl:ml-40">
                <span className="mr-2 text-[18px] text-slate-600 font-bold md:text-[20px] lg:text-[28px]">
                  03
                </span>
                SPACE LAUNCH 101
              </h1>
              <div className="text-light-0 lg:flex lg:flex-row-reverse lg:ml-14 lg:justify-between xl:mx-48">
                <div className="flex lg:w-1/2 lg:mt-20">
                  <img
                    className="w-full h-52 mx-auto md:w-full md:h-56 lg:hidden"
                    src={filteredTechnology.images.landscape}
                    alt=""
                  />
                  <img
                    className=" hidden   lg:flex lg:w-[512px] lg:h-[527px] lg:-mt-32"
                    src={filteredTechnology.images.portrait}
                    alt={filteredTechnology.name}
                  />
                </div>

                <div className="mx-10 md:mx-16 lg:mx-10 lg:w-1/2 md:px-0 lg:flex lg:flex-row lg:px-0 justify-between">
                  <div>
                    <div className="flex justify-center space-x-4  lg:mt-[5.75rem] lg:mr-8  mb-9 md:mb-9 md:mt-4 lg:flex-col lg:space-y-4 lg:space-x-0">
                      <div
                        className="w-11 h-11 lg:w-[80px] lg:h-[80px] border border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                        onClick={onclickHandler}
                      >
                        <span className="mx-auto my-auto"></span>
                        <span className="hidden">Launch vehicle</span>
                      </div>
                      <div
                        className="w-11 h-11 lg:w-[80px] lg:h-[80px] border border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                        onClick={onclickHandler}
                      >
                        <span className="mx-auto my-auto"></span>
                        <span className="hidden">Spaceport</span>
                      </div>
                      <div
                        className="w-11 h-11 lg:w-[80px] lg:h-[80px] border border-white rounded-full  text-center flex hover:bg-white hover:text-black"
                        onClick={onclickHandler}
                      >
                        <span className="mx-auto my-auto"></span>
                        <span className="hidden">Space capsule</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[16px] text-lavender-0 text-center font-Bellefair uppercase md:text-[16px] lg:text-left lg:mt-28">
                      THE TERMINOLOGY…
                    </h2>
                    <h1 className="text-[24px] text-center font-Bellefair uppercase my-4 md:mt-0 md:mb-1 md:text-[40px] lg:text-left">
                      {filteredTechnology.name}
                    </h1>
                    <p className="text-center tracking-wide leading-6 text-[14px] md:text-[16px] md:leading-7 text-lavender-0 lg:text-left lg:text-[16px]">
                      {filteredTechnology.description}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ))
      )}
    </div>
  );
};

export default Technologies;
