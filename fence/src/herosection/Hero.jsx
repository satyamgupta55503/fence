import first from "../assets/hero/first.png";
import C4 from "../herosection/C4";


// import wiremesh from "../assets/hero/wiremesh.png";


const Hero = () => {
  return (
    <>
 
{/* <div className="flex justify-center md:justify-end w-full md:w-auto">
<img src={wiremesh} alt="wiremesh logo" className="max-w-full md:max-w-none h-auto" />
</div> */}

    <div className="flex flex-col items-start  md:justify-start px-4 md:px-0 py-8">
      <div className="w-full flex px-14 justify-start">
        <img src={first} alt="first logo" className="" />
      </div>

    
      <div className="text-white px-14 font-semibold text-center mt-6">
        <h1 className="text-4xl md:text-4xl ">Leading Wire Mesh</h1>
        <h1 className="text-4xl md:text-4xl py-2 ">Manufacturers In India</h1>
      </div>
     
    
    </div>
   
    </>
  );
};

export default Hero;



