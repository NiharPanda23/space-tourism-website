import { useState } from "react";
import data from "../data.json";
import { images } from "../constants";

const Crews = () => {
  const [name, setName] = useState("");

  function onclickHandler(e) {
    var key = e.target.textContent;
    setName(key);
  }

  return (
    <div className="destination w-full bg-cover h-screen bg-no-repeat flex flex-col text-light-0">
      {name === "" ? (
        <>
          <h1 className="text-light-0 mt-20 font-Barlow text-center mb-10 text-[18px] tracking-[0.16em] uppercase md:mt-36 md:ml-16 md:text-left md:text-[20px] lg:text-[28px] lg:mt-36 lg:ml-[7.5rem] xl:mt-44 xl:ml-40">
            <span className="mr-2 text-[18px] text-slate-600 font-bold md:text-[20px] lg:text-[28px] ">
              02
            </span>
            Meet your crew
          </h1>
          <div className="text-light-0 md:flex md:flex-col-reverse  lg:flex lg:flex-row-reverse xl:mx-48">
            <div className="flex flex-col lg:w-1/2 lg:h-full lg:relative xl:-mt-36">
              <img
                className="w-[177.12px] h-[240px] mx-auto md:w-[358.37px] md:h-[457px] lg:absolute lg:w-[400px] lg:h-[806px] lg:ml-20 xl:w-[500px] xl:h-[900px] object-contain"
                src={images.douglas}
                alt="Moon"
              />
              <div className=" w-auto mx-6 bg-slate-600 h-[0.2px] bg-slate-7 backdrop-blur-2xl backdrop-contrast-100 backdrop-brightness-150 md:hidden"></div>
            </div>

            <div className="mx-10 md:mx-16 md:flex md:flex-col-reverse lg:w-1/2  md:px-0 lg:px-0 lg:mt-32 lg:ml-28 xl:ml-[-30px] xl:mt-44">
              <div className="flex  justify-center space-x-4  mt-8  mb-9 md:mb-9 md:mt-4 lg:justify-start">
                {data.crew.map((singleCrew, i) => (
                  <div
                    key={i}
                    value={singleCrew.name}
                    className="w-2 h-2 rounded-full bg-slate-500 "
                    onClick={onclickHandler}
                  >
                    <span className="hidden">{singleCrew.role}</span>
                  </div>
                ))}
              </div>
              <div>
                <>
                  <h2 className="text-[16px] text-lavender-0 text-center font-Bellefair uppercase md:text-[24px] lg:text-left">
                    Commander
                  </h2>
                  <h1 className="text-[24px] text-center font-Bellefair uppercase my-4 md:mt-0 md:mb-1 md:text-[40px] lg:text-left">
                    Douglas Hurley
                  </h1>
                </>
                <p className="text-center tracking-wide leading-6 text-[15px] md:text-[16px] md:leading-7 text-lavender-0 lg:text-left">
                  Douglas Gerald Hurley is an American engineer, former Marine
                  Corps pilot and former NASA astronaut. He launched into space
                  for the third time as commander of Crew Dragon Demo-2.
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        data.crew
          .filter((myCrew) => myCrew.role === name)
          .map((filteredData) => (
            <div key={filteredData.id}>
              <h1 className="text-light-0 mt-20 font-Barlow text-center mb-10 text-[18px] tracking-[0.16em] uppercase md:mt-36 md:ml-16 md:text-left md:text-[20px] lg:text-[28px] lg:mt-36 lg:ml-[7.5rem] xl:mt-44 xl:ml-40">
                <span className="mr-2 text-[18px] text-slate-600 font-bold md:text-[20px] lg:text-[28px] ">
                  02
                </span>
                Meet your crew
              </h1>
              <div className="text-light-0 md:flex md:flex-col-reverse  lg:flex lg:flex-row-reverse xl:mx-48">
                <div className="flex flex-col lg:w-1/2 lg:h-full lg:relative xl:-mt-36">
                  <img
                    className="w-[177.12px] h-[240px] mx-auto md:w-[358.37px] md:h-[457px] lg:absolute lg:w-[400px] lg:h-[806px] lg:ml-20 xl:w-[500px] xl:h-[900px] object-contain"
                    src={filteredData.images.png}
                    alt={filteredData.name}
                  />
                  <div className=" w-auto mx-6 bg-slate-600 h-[0.2px] bg-slate-7 backdrop-blur-2xl backdrop-contrast-100 backdrop-brightness-150 md:hidden"></div>
                </div>

                <div className="mx-10 md:mx-16 md:flex md:flex-col-reverse lg:w-1/2  md:px-0 lg:px-0 lg:mt-32 lg:ml-28 xl:ml-[-30px] xl:mt-44">
                  <div className="flex  justify-center space-x-4  mt-8  mb-9 md:mb-9 md:mt-4 lg:justify-start">
                    
                      <div className="w-2 h-2 rounded-full bg-slate-500 " onClick={onclickHandler}>
                        <span className="hidden">Commander</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-500 " onClick={onclickHandler}>
                        <span className="hidden">Mission Specialist</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-500 " onClick={onclickHandler}>
                        <span className="hidden">Pilot</span>
                      </div>
                      <div className="w-2 h-2 rounded-full bg-slate-500 " onClick={onclickHandler}>
                        <span className="hidden">Flight Engineer</span>
                      </div>
                  </div>
                  <div>
                    <>
                      <h2 className="text-[16px] text-lavender-0 text-center font-Bellefair uppercase md:text-[24px] lg:text-left">
                        {filteredData.role}
                      </h2>
                      <h1 className="text-[24px] text-center font-Bellefair uppercase my-4 md:mt-0 md:mb-1 md:text-[40px] lg:text-left">
                        {filteredData.name}
                      </h1>
                    </>
                    <p className="text-center tracking-wide leading-6 text-[15px] md:text-[16px] md:leading-7 text-lavender-0 lg:text-left">
                      {filteredData.bio}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
      )}
    </div>
  );
};

export default Crews;
