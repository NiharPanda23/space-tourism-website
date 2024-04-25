import { images } from "../constants";
import data from "../data.json";

console.log(data.destinations);
const Destinations = () => {
  return(

  <div className="w-full bg-cover h-screen bg-no-repeat destination text-light-0">
  {/* {
    data.destinations.map(destination =>(
      <div key={destination.name}>{destination.name}</div>
    ))
  } */}
    <div className="flex flex-col mx-auto w-80 md:w-[45rem]">
      <div className="mt-12 md:mt-40">
        <h3 className="text-center text-base font-Barlow uppercase tracking-[0.15em] my-4 font-medium md:text-left md:text-[20px] md:my-6"> <span className="text-slate-500 font-bold ">01</span> Pick your destination</h3>
      </div>
      <div className="flex">
        <div>
          <img className="w-48 h-48 mx-auto my-2 md:w-72 md:h-72 md:my-12" src={images.moon} alt="moon" />
        </div>
        <div>
          <ul className="flex text-sm justify-evenly font-Barlow my-3 md:text-base md:mx-32 md:my-6">
            <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4 md:tracking-[0.2em]">Moon</li>
            <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4 md:tracking-[0.2em]">Mars</li>
            <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4 md:tracking-[0.2em]">Europa</li>
            <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4 md:tracking-[0.2em]">Titan</li>
          </ul>
        </div>
      </div>
      <div>
        <h1 className="text-center text-6xl font-Bellefair uppercase my-4 md:text-[80px] md:my-8">Moon</h1>
        <p className="text-center text-sm text-lavender-0 mb-4 leading-6 tracking-wider md:text-[16px] md:mb-12">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="w-full h-[3px] bg-transparent backdrop-blur-2xl backdrop-contrast-75 "></div>
        <div className="text-center md:flex md:justify-between md:mx-48 my-0 md:my-4">
          <div>
            <p className="font-Barlow text-[14px] uppercase mt-3 text-lavender-0 tracking-widest">Avg. distance</p>
            <h1 className="text-2xl text-[28px] font-Bellefair uppercase mt-2">384,400 km</h1>
          </div>
          <div>
            <p className="font-Barlow text-[14px] uppercase mt-3 text-lavender-0 tracking-widest">Est. travel time</p>
            <h1 className="text-2xl text-[28px] font-Bellefair uppercase mt-2">3 days</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
  

export default Destinations;
