import React, { useState } from "react";
import truck3 from "../assets/truck3.jpg";
import truck1 from "../assets/truck1.jpg";
import truck2 from "../assets/truck2.jpg";
import { Link } from "react-router-dom";

const serviceData = [
  {
    key: "cross",
    title: "Cross-Border Transportation",
    bg: truck2,
    desc: `Crossing the border into Canada or the US can be a complicated process. You will be working with customs brokers, officers and agents and negotiating paperwork. Not to mention not knowing if your outside carrier has the ability and knowledge to navigate all the regulations and requirements to get a shipment across the border. At X Transport, our group of highly specialized coordinators handle 6,000 cross-border shipments every year, putting your mind at ease that your shipment will be moved seamlessly throughout the whole process.


We can also offer customs clearance services into and out of Canada and the US through our trusted partnership.`
  },
  {
    key: "dry",
    title: "Dry Van & Refrigerated Transportation",
    bg: truck1,
    desc: `Whether you're shipping dry goods or temperature-sensitive freight, our modern fleet of dry vans and refrigerated trailers ensures reliable delivery with real-time monitoring and consistent climate control.

Our refrigerated units maintain temperature integrity from origin to destination. With detailed tracking and 24/7 support, we guarantee the safety of your sensitive cargo every mile of the way.`
  },
  {
    key: "flat",
    title: "Flatbed/Stepdeck Shipping",
    bg: truck3,
    desc: `Ideal for oversized or heavy cargo, our flatbed trailers provide the flexibility and strength needed for construction materials, machinery, and other unconventional freight types.

Our expert drivers and securement practices ensure safe transport of your specialized equipment, whether it's a single delivery or part of a larger project.`
  },
  {
    key: "heavy",
    title: "Heavy Haul & Over Dimensional",
    bg: truck2,
    desc: `When freight exceeds standard dimensions, we step in with custom-engineered transport strategies, including route surveys, permits, and safety escorts.

Our heavy haul capabilities include multi-axle configurations and escort coordination across jurisdictions.`
  },
  {
    key: "intermodal",
    title: "Intermodal/Multimodal Transportation",
    bg: truck1,
    desc: `Optimize efficiency and reduce costs by combining multiple modes of transport—road, rail, and sea—while we manage it all through one point of contact.

Our network ensures a smooth transition between carriers while minimizing delays and handling risks.`
  },
  {
    key: "project",
    title: "Project Management & Logistics",
    bg: truck2,
    desc: `We oversee the lifecycle of your logistics projects, managing planning, coordination, execution, and delivery with precision and professionalism.

Whether it's an industrial move, plant relocation, or multi-phase operation, our team ensures your success through data-driven planning and real-time oversight.`
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceData[0]);

  return (
    <div className="text-blue-300">
      {/* Hero Section */}
      <div
        className="h-[60vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${truck3})` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
        <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white tracking-wide">
            Our Services
          </h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-4">
            {serviceData.map((service) => (
              <button
                key={service.key}
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  selectedService.key === service.key
                    ? "bg-blue-500 text-white"
                    : "bg-white/20 text-white hover:bg-blue-500"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Detail Section */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6">
        {/* Background Layers */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedService.bg})` }}
        />
        <div className="absolute inset-4 sm:inset-10 bg-black/60 backdrop-blur-md z-0 rounded-lg" />

  {/* Foreground Content */}
<div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-10 bg-transparent px-4 sm:px-6">
  {/* Sidebar on top for mobile */}
  <div className="w-full md:w-1/3 backdrop-blur-sm bg-white/10 rounded-lg p-4 md:p-6 border border-white/20">
    <ul className="space-y-3 text-sm sm:text-base font-medium">
      {serviceData.map((service) => (
        <li
          key={service.key}
          onClick={() => setSelectedService(service)}
          className={`cursor-pointer transition-colors ${
            selectedService.key === service.key
              ? "text-blue-300 font-semibold"
              : "text-white hover:text-blue-400"
          }`}
        >
          {service.title}
        </li>
      ))}
    </ul>

    <Link to="/contact">
      <button className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-semibold text-sm sm:text-base">
        ✉ Contact Us
      </button>
    </Link>
  </div>

  {/* Main Content */}
  <div className="w-full md:w-2/3 backdrop-blur-sm bg-black/50 rounded-lg p-6 md:p-8 border border-white/20 text-white">
    <p className="text-blue-200 font-bold uppercase text-xs sm:text-sm mb-2">Services & Modes</p>
    <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
      {selectedService.title}
    </h2>
    <h3 className="text-sm sm:text-base font-semibold text-white mb-4">
      Your Trusted Partner in {selectedService.title}
    </h3>

    {selectedService.desc.split("\n").map((para, i) => (
      <p key={i} className="text-sm sm:text-base leading-relaxed mb-3">
        {para.trim()}
      </p>
    ))}
  </div>
</div>

      </div>

      {/* Map Section */}
      <div className="w-full h-[300px] sm:h-[400px]">
        <iframe
          title="North America Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6507971.173614891!2d-98.5795!3d56.1304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sca"
          className="w-full h-full border-none"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Services;
