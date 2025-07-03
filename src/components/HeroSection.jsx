import React from 'react';
import mainVideo from '../assets/main_video.mp4';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      
      {/* Background Video with brightness filter */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover brightness-50"
      >
        <source src={mainVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
          Delivering All Over USA & Canada
        </h1>
        <p className="text-white text-lg md:text-2xl font-medium max-w-2xl drop-shadow-md">
          Deliver seamless, reliable heavy haul solutions across North America with precision and expertise.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
