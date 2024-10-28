import pic1 from "../assets/gallery/pic1.png";
import pic2 from "../assets/gallery/pic2.png";
import pic3 from "../assets/gallery/pic3.png";
import pic4 from "../assets/gallery/pic4.png";
import pic5 from "../assets/gallery/pic5.png";
import pic6 from "../assets/gallery/pic6.png";
import pic7 from "../assets/gallery/pic7.png";
import gallery1 from "../assets/gallery/gallery1.png";
import Container from "./Container";

function Gallery() {
  return (
    <Container>
      <div className="mt-12 mb-20">
        {/* Header */}
        <div className="flex items-center  w-[150px] h-[40px] mx-auto pr-4">
          <img src={gallery1} alt="gallery icon" className="p-4" />
        </div>
        <div className="text-center">
          <span className="text-[#222222] font-bold text-[36px] md:text-[45px] mr-2">Explore</span>
          <span className="text-[#E10017] font-bold text-[36px] md:text-[45px]">Our Work</span>
        </div>

        {/* Gallery Images */}
        <div className="flex flex-col md:flex-row md:gap-5 mx-auto w-full max-w-[1390px] px-4 md:px-0">
          <div className="flex flex-col gap-5 md:w-1/3">
            <img src={pic1} alt="photo" className="w-full h-auto md:w-[450px] md:h-[430px] rounded-md" />
            <img src={pic2} alt="photo" className="w-full h-auto md:w-[450px] md:h-[430px] rounded-md" />
          </div>
          <div className="flex flex-col gap-5 md:w-1/3">
            <img src={pic3} alt="overlay" className="w-full h-auto md:w-[450px] md:h-[250px] rounded-md" />
            <img src={pic4} alt="picture" className="w-full h-auto md:w-[450px] md:h-[250px] rounded-md" />
            <img src={pic5} alt="picture" className="w-full h-auto md:w-[450px] md:h-[430px] rounded-md" />
          </div>
          <div className="flex flex-col gap-5 md:w-1/3">
            <img src={pic6} alt="gallery" className="w-full h-auto md:w-[450px] md:h-[430px] rounded-md" />
            <img src={pic7} alt="gallery" className="w-full h-auto md:w-[450px] md:h-[430px] rounded-md" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Gallery;
