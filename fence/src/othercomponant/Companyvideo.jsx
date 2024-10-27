import logo from "../assets/companyvideoo/logo.png";
import videoimg from "../assets/companyvideoo/videoimg.png";
import Container from "./Container";


const Companyvideo = () => {
  return (
    <>
    <Container>
      <div className="flex justify-center my-2">
        <img src={logo} alt="Company Logo" className="" />
      </div>
      <div className="flex items-center justify-center">
        <h1 className="font-semibold text-3xl text-center">
          We provide a wide range of <span className="text-red-600">services to advance!</span>
        </h1>
      </div>
      <div className="flex items-center justify-center my-4">
        <img src={videoimg} alt="video img" className="w-auto h-auto object-cover "/>
      </div>


    </Container>
    </>
  );
};

export default Companyvideo;
