import Content from "../assets/nevbar/Content.png";

// import Hero from "../herosection/Hero";

import herobackground from "../assets/nevbar/herobackground.jpg";


const Nevbar = () => {
  const navItems = ["Home", "Service", "About Us", "Gallery", "PX-E"];

  return (
    <>


    <nav className="w-full   p-4 flex flex-col md:flex-row md:items-end md:justify-between">
      {/* Logo Section */}
      <div className="flex justify-end md:justify-start mb-4 md:mb-0">
        <img src={Content} alt="Content logo" className="h-12 md:h-16" />
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col md:flex-row font-bold items-center gap-2 md:gap-4">
        {navItems.map((item, index) => (
          <button
            key={index}
            className="text-white px-3 py-2 text-sm md:text-base rounded-lg hover:bg-gray-600 transition-all duration-200 ease-in-out mb-2 md:mb-0"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Contact Us Button */}
      <div>
        <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
          Contact Us
        </button>
      </div>

      
    </nav>
       
    {/* <div>
        <Hero/>
      </div> */}

    </>
    
  );
};

export default Nevbar;
