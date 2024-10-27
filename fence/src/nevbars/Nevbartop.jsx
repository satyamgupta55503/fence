import Nevbar from "../nevbars/Nevbarmain";


import call from "../assets/nevbar/call.png";
import location from "../assets/nevbar/location.png";
import message from "../assets/nevbar/message.png";

const Top = () => {
    return (
        <>
        
        <div className="bg-black flex flex-wrap text-base sm:text-xl gap-3 sm:gap-5 justify-center sm:justify-end px-3 sm:px-6 text-white py-2 sm:py-3">
            <div className="flex gap-1 sm:gap-2 items-center">
                <img src={call} alt="call icon" className="w-4 sm:w-6" />
                <span>+91-9329807373</span>
            </div>
            <div className="flex gap-1 sm:gap-2 items-center">
                <img src={message} alt="message icon" className="w-4 sm:w-6" />
                <span>mmweldmesh@gmail.com</span>
            </div>
            <div className="flex gap-1 sm:gap-2 items-center">
                <img src={location} alt="location icon" className="w-4 sm:w-6" />
                <span>61/3, Dumartarai, Raipur, CG</span>
            </div>
        </div>

        {/* <div>
            <Nevbar/>

        </div> */}


        </>
    );
};

export default Top;
