import { images } from "../constants";

const Destinations = () => {
  return (
    <div className="destination w-full bg-cover h-screen bg-no-repeat flex flex-col">
        <h1 className="text-light-0 mt-24 font-Barlow ml-40 mb-10 text-[18px] tracking-[0.16em] uppercase md:mt-32 md:ml-16 md:text-[20px] lg:text-[28px] lg:mt-56 lg:ml-[7.5rem]">
          <span className="mr-2 text-[18px] text-slate-600 font-bold md:text-[20px] lg:text-[28px]">01</span>Pick your destination
        </h1>
      <div className="text-light-0 lg:flex lg:justify-between xl:mx-48">
        <div className="flex lg:w-1/2 lg:mt-20">
          <img className="w-52 h-52 mx-auto md:w-56 md:h-56 lg:w-72 lg:h-72" src={images.moon} alt="Moon" />
        </div>
        <div className="mx-10 md:mx-16 lg:w-1/2 xl:px-20 md:px-0 lg:px-0">
          <ul className="flex justify-between mx-20 mt-10 md:mx-32 lg:ml-0">
            <li className="font-Barlow hover:underline hover:underline-offset-[14px] hover:decoration-2 tracking-[0.16em] uppercase text-[16px]">Moon</li>
            <li className="font-Barlow hover:underline hover:underline-offset-[14px] hover:decoration-2 tracking-[0.16em] uppercase text-[16px]">Mars</li>
            <li className="font-Barlow hover:underline hover:underline-offset-[14px] hover:decoration-2 tracking-[0.16em] uppercase text-[16px]">Europa</li>
            <li className="font-Barlow hover:underline hover:underline-offset-[14px] hover:decoration-2 tracking-[0.16em] uppercase text-[16px]">Titan</li>
          </ul>
          <h1 className="text-[56px] text-center font-Bellefair uppercase my-4 md:text-[80px] lg:text-left">Moon</h1>
          <p className="text-center tracking-wide leading-6 text-[14px] md:text-[16px] md:leading-7 text-lavender-0 lg:text-left">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="h-[1px] bg-white mt-8"></div>
          <div className="flex flex-col text-center justify-between mx-20 mt-10 md:flex-row md:mx-28 lg:ml-0">
            <div>
              <p className="font-Bellefair uppercase text-[12px] text-lavender-0 lg:text-left">Avg. distance</p>
              <h1 className="font-Bellefair text-[30px] lg:text-left">384,400 km</h1>
            </div>
            <div className="mt-6 md:mt-0">
              <p className="font-Bellefair uppercase text-[12px] text-lavender-0 lg:text-left xl:ml-4">Est. travel time</p>
              <h1 className="font-Bellefair text-[30px] lg:text-left xl:ml-4">3 days</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
