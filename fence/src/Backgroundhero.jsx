
import herobackground from "../src/assets/nevbar/herobackground.jpg"; 

const BackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full">
   
      <img
        src={herobackground}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default BackgroundWrapper;
