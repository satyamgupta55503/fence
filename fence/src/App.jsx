import React from 'react';
import BackgroundWrapper from './Backgroundhero';
import Nevbartop from './nevbars/Nevbartop';
import NevbarMain from './nevbars/Nevbarmain';
import HeroSection from './herosection/Hero';
import C4 from './herosection/C4';
import KPlus from './herosection/K+';
import wiremesh from "../src/assets/hero/wiremesh.png";
import Marque from "./othercomponant/Marquestyle";
import Companyvideo from "./othercomponant/Companyvideo";
import Categories from "./othercomponant/Categories";
import Featuredproduct from "./othercomponant/Featuredproduct";
import Gallery from "./othercomponant/Gallery";
import Testimonials from './othercomponant/testimonials';
import Container from './othercomponant/Container';
import ContactUs from "./othercomponant/ContactUs";
import Footer from "./othercomponant/Footer";


function App() {
  return (
    <>
      <BackgroundWrapper>
        <Nevbartop />
        <NevbarMain />
        
        <div className="flex flex-col md:flex-row items-center justify-center p-4">
  {/* Left Section (Hero, C4, KPlus) */}
  <div className="flex flex-col space-y-6 md:w-2/3 md:mr-4">
    <HeroSection />
    <C4 />
    <KPlus />
  </div>
  
  {/* Right Section (WireMesh Image) */}
  <div className="md:w-1/3 mt-6 md:mt-0">
    <img
      src={wiremesh}
      alt="Wire Mesh"
      className="w-full h-full object-cover"
    />
  </div>
</div>


      </BackgroundWrapper>
      
      <Marque />
      <Companyvideo />
      <Categories />
      <Featuredproduct />
      <Gallery />
      <Testimonials />
      <Container />
      <ContactUs />

    
      <Footer />
    </>
  );
}

export default App;
