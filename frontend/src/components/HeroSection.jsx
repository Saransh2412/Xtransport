import React from 'react';
import mainVideo from '../assets/main_video.mp4';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Video */}
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
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-lg leading-snug sm:leading-tight">
          Delivering All Over USA & Canada
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-2xl drop-shadow-md leading-relaxed">
          Deliver seamless, reliable heavy haul solutions across North America with precision and expertise.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
