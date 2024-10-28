import logo2 from "../assets/testimonials/logo2.png";
import profile from "../assets/testimonials/profile.jpg";

const Testimonial = () => {
  return (
    <section className="flex flex-col items-center text-center py-16 bg-gray-50">
        <div className="flex justify-center my-2">
            <img src={logo2} alt="logo2 icon" className="p-4" />
          </div> 
      <h2 className="mt-4 text-3xl font-bold">
        We Are Very Glad To{" "}
        <span className="text-red-500">Get Client Review.</span>
      </h2>
      <div className="mt-8 max-w-lg p-6 ">
        <img
          src={profile}
          alt="profile logo"
          className="w-20 h-20 mx-auto rounded-full"
        />
        <p className="mt-4 text-xl font-semibold text-blue-500">“</p>
        <span className="mt-4 text-blue-400 ">
          MM Industries Pvt Ltd has been instrumental in helping us achieve our project goals with their
           
        
        </span>
        <span className="text-blue-400"> superior quality welded wire mesh products.
        Their expertise and dedication to customer</span>
        <span className="text-blue-400">satisfaction have made them
        our go-to supplier for all our reinforcement needs. We trust MM</span>
        <span className="text-blue-400">  Industries to deliver excellence every time, and they never disappoint
        ...</span>

        <a href="#" className="mt-4 block text-blue-600 underline">
          Read More
        </a>
        <div className="mt-8">
          <p className="text-gray-800 font-medium">Farhan Rio</p>
          <p className="text-gray-500 text-sm">Agent Manager</p>
        </div>
      </div>
      <div className="mt-6 flex space-x-2">
        <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
        <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimonial;
