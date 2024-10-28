import logo1 from "../assets/category/logo1.png";
import img1 from "../assets/category/img1.png";
import img2 from "../assets/category/img2.png";
import img3 from "../assets/category/img3.png";
import img4 from "../assets/category/img4.png";
import img5 from "../assets/category/img5.png";
import img6 from "../assets/category/img6.png";
import Container from "./Container";





const Categories = () => {

    const image = [
        { src: img1, name: 'Different Wire Mesh' },
        { src: img2, name: 'Various Wire Mesh' },
        { src: img3, name: 'Wire mesh processing' },
        { src: img4, name: 'Various wire mesh ' },
        { src: img5, name: 'Types of  Wire Mesh' },
        { src: img6, name: 'Different Wire ' },
    ];    

  return (
    <>
    <Container>
    
    <div className="py-8">
        <img src={logo1} alt="" className="" />
    </div>
   <div className="flex items-start justify-start py-4">
        <h1 className="font-semibold text-3xl text-center">
        We offer many<span className="text-red-600"> Categories.</span>
        </h1>
      </div>
    <div><h3 className="text-gray-800">We specialize in the Services.</h3></div>
    

    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 p-4 py-8">
      {image.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={image.src}
            alt={image.name}
            className="w-full h-auto object-cover rounded-md shadow-md"
          />
          <p className="mt-2 text-center text-sm font-medium">{image.name}</p>
        </div>
      ))}
    </div>
    </Container>
    </>
  );
};

export default Categories;    