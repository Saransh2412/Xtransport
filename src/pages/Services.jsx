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
    desc: `Crossing the border into Canada or the US can be a complicated process. You will be working with customs brokers, officers and agents and negotiating paperwork. Not to mention not knowing if your outside carrier has the ability and knowledge to navigate all the regulations and requirements to get a shipment across the border. At XTransport, our group of highly specialized coordinators handle 6,000 cross-border shipments every year, putting your mind at ease that your shipment will be moved seamlessly throughout the whole process.

Being C-TPAT and PIP certified, we provide the highest level of security for your cross-border freight in collaboration with both Canada Border Services Agency and the US Customs and Border Protection.

We can also offer customs clearance services into and out of Canada and the US through our trusted partnership with Cole International Customs Broker.`
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
    title: "Flatbed Shipping",
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
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
       <div className="relative z-10 flex flex-col items-center gap-6 text-center">
  <h1 className="text-5xl font-extrabold uppercase text-white tracking-wide">
    Our Services
  </h1>
  <div className="flex flex-wrap justify-center gap-4 mt-4">
    {serviceData.map((service) => (
      <button
        key={service.key}
        onClick={() => setSelectedService(service)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
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

      {/* Services Section */}
      <div className="relative py-20 px-4">
        {/* Background Layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${selectedService.bg})` }}
        ></div>
        <div className="absolute inset-16 bg-black/60 backdrop-blur-md z-0"></div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-4 gap-8 p-8 rounded-xl transition-all duration-500 ease-in-out">
          {/* Sidebar */}
          <div className="col-span-1">
            <ul className="space-y-4 font-medium text-lg">
              {serviceData.map((service) => (
                <li
                  key={service.key}
                  onClick={() => setSelectedService(service)}
                  className={`cursor-pointer transition-colors ${
                    selectedService.key === service.key
                      ? "text-blue-300 font-semibold"
                      : "text-white hover:text-blue-500"
                  }`}
                >
                  {service.title}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded flex items-center justify-center gap-2">
                <span className="text-lg">✉</span> CONTACT US
              </button>
            </Link>
          </div>

          {/* Main Content */}
          <div className="col-span-3 space-y-6">
            <p className="text-white font-bold uppercase">Services & Modes</p>
            <h2 className="text-4xl font-extrabold">{selectedService.title}</h2>
            <h3 className="text-lg font-semibold text-white mb-4">
              Your Trusted Partner in {selectedService.title}
            </h3>
            {selectedService.desc.split("\n").map((para, i) => (
              <p key={i} className="text-white leading-relaxed">
                {para.trim()}
              </p>
            ))}
            {/* <Link to="/quote">
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold">
                QUICK QUOTE
              </button>
            </Link> */}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
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
