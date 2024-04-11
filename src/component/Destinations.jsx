import { images } from "../constants";
import data from "../data.json";

console.log(data.destinations);
const Destinations = () => (
  <div className="w-full bg-cover h-screen bg-no-repeat destination text-light-0">
    <div className="flex flex-col mx-auto w-80">
      <div className="mt-12">
        <h3 className="text-center text-base font-Barlow uppercase tracking-[0.15em] my-6 font-semibold"> <span className="text-slate-500 font-bold">01</span> Pick your destination</h3>
      </div>
      <div>
        <img className="w-48 h-48 mx-auto my-4" src={images.moon} alt="moon" />
      </div>
      <div>
        <ul className="flex text-sm justify-evenly font-Barlow my-4">
          <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4">Moon</li>
          <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4">Mars</li>
          <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4">Europa</li>
          <li className="hover:underline underline-offset-8 decoration-2 text-lavender-0 tracking-widest uppercase active:underline active:decoration-4">Titan</li>
        </ul>
      </div>
      <div>
        <h1 className="text-center text-6xl font-Bellefair uppercase my-4">Moon</h1>
        <p className="text-center text-sm text-lavender-0 mb-6 leading-6 tracking-wider">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="w-full h-[3px] bg-transparent backdrop-blur-2xl backdrop-contrast-75 "></div>
        <div className="text-center">
          <p className="font-Barlow uppercase mt-5 text-lavender-0 tracking-widest">Avg. distance</p>
          <h1 className="text-2xl text-[28px] font-Bellefair uppercase mt-2">384,400 km</h1>

          <p className="font-Barlow uppercase mt-5 text-lavender-0 tracking-widest">Est. travel time</p>
          <h1 className="text-2xl text-[28px] font-Bellefair uppercase mt-2">3 days</h1>
        </div>
      </div>
    </div>
  </div>
);

export default Destinations;
