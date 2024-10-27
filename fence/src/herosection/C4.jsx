import Lakh from "../herosection/K+";
import bullet from "../assets/hero/bullet.png";

const C4 = () => {
  return (
    <div className="mt-4 mb-8 flex flex-col  items-start">
      {/* Row 1 */}
      <div className="flex flex-col  px-14 md:flex-row items-start justify-start gap-4 ">
        <div className="flex items-start gap-2 w-full md:w-auto">
          <img src={bullet} alt="bullet icon" className="h-5 w-5" />
          <span className="text-white text-base md:text-lg whitespace-nowrap">Expand your reach</span>
        </div>
        <div className="flex items-start gap-2 w-full md:w-auto">
          <img src={bullet} alt="bullet icon" className="h-5 w-5" />
          <span className="text-white text-base md:text-lg  whitespace-nowrap">Boost your income</span>
        </div>
      </div>

      {/* Row 2 */}
      <div className="flex flex-col py-6 px-14 md:flex-row items-start justify-start gap-4 w-full">
        <div className="flex items-start  gap-2 w-full md:w-auto">
          <img src={bullet} alt="bullet icon" className="h-5 w-5" />
          <span className="text-white text-base md:text-lg whitespace-nowrap">Become an ed-tech leader</span>
        </div>
        <div className="flex items-start gap-2 w-full md:w-auto">
          <img src={bullet} alt="bullet icon" className="h-5 w-5" />
          <span className="text-white text-base md:text-lg whitespace-nowrap">Effortless management</span>
        </div>
      </div>
      <div className="px-14 py-4 ">       
         <button  className="bg-red-700 rounded-lg py-2 px-6 text-white hover:bg-slate-500">Request Call Back</button>
      </div>


    </div>
  );
};

export default C4;
