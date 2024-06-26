import "./styles.css";
const Home = () => {
  return (
    <div className="w-full bg-cover h-screen bg-no-repeat home bg-blend-soft-light flex flex-col lg:flex-row lg:justify-between">
      
      <div className="flex flex-col mt-10 mx-auto lg:w-1/2 lg:ml-12 lg:mt-8">
        <h2 className="text-lavender-0 text-center font-Barlow mt-20 tracking-[0.2em] leading-[6px] mx-auto font-normal text-[16px] md:text-[24px] md:mt-40 md:leading-3 md:tracking-[0.25em] lg:mt-60 lg:ml-10 lg:text-[32px] lg:tracking-[0.26em]">
          So, you want to travel to
        </h2>
        <h1 className=" text-center text-light-0 mt-2 text-[80px] font-Bellefair font md:text-[150px] md:tracking-[18px] md:mt-4 lg:text-[180px] lg:tracking-wide lg:mt-1 lg:text-left lg:mx-7 ">
          SPACE
        </h1>
        <p className="text-center font-thin text-[15px] tracking-wider flex leading-6 flex-wrap line mx-8 md:mx-28 md:text-[18px] md:leading-7 lg:mx-9 lg:text-left lg:text-[20px] lg:-mt-8 lg:leading-10 text-lavender-0 mt-8">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="lg:w-1/2 ">
        <div className="bg-light-0 mt-56 mx-auto rounded-full b w-48 h-48 flex border-spacing-1 hover:shadow-[0px_0px_30px_5px_#90CDF4] md:mt-12 md:w-64 md:h-64 md:hover:shadow-[0px_0px_80px_10px_#90CDF4] lg:mt-[23rem] lg:w-72 lg:h-72 lg:mr-24 xl:mr-80">
          <a href="#destination" className="mx-auto my-auto text-[20px] font-Bellefair md:text-[35px] lg:text-[50px]">EXPLORE</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
