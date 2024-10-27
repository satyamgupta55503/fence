import featuredlogo from "../assets/featuredproduct/featuredlogo.png";
import omg1 from "../assets/featuredproduct/omg1.png";
import omg2 from "../assets/featuredproduct/omg2.png";
import omg3 from "../assets/featuredproduct/omg3.png";
import omg4 from "../assets/featuredproduct/omg4.png";
import omg5 from "../assets/featuredproduct/omg5.png";
import Container from "./Container";
const Featuredproduct = () => {
  const imgItems = [
    { src: omg1, name: 'Chain Link' },
    { src: omg2, name: 'Chain Link' },
    { src: omg2, name: 'Chain Link' },
    { src: omg3, name: 'Chain Link' },
    { src: omg4, name: 'Chain Link' },
    { src: omg5, name: 'Chain Link' },
    // Make sure to add omg6.png in assets if needed
  ];

  return (
    <> 
    <Container>
    <div className="bg-slate-200">
      <div className=" ">
        <img src={featuredlogo} alt="Featured Logo" className="" />
      </div>
      <div className="flex items-start justify-start py-4">
        <h1 className="font-semibold text-3xl text-center">
          We offer many 
          <span className="text-red-600"> services to progress!</span>
        </h1>
      </div>
      <div>
        <h3 className="text-gray-800">We specialize in the Services.</h3>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-4">
        {imgItems.map((image, index) => (
          <div key={index} className="flex flex-col items-center bg-white rounded-md shadow-md p-4">
            <img
              src={image.src}
              alt={image.name}
              className="w-full h-auto object-cover rounded-md"
            />
            <p className="mt-2 text-center text-sm font-medium ">{image.name}</p>
            <button className="mt-2 px-4 py-2  text-blue-500 font-semibold border border-blue-500 rounded hover:bg-blue-100">
              Get a Quote
            </button>
          </div>
        ))}
      </div>
      </div>
    </Container>
    </>
  );
}

export default Featuredproduct;
