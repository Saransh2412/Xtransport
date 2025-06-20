import React, { useState } from 'react';

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    // Contact Information
    companyName: '',
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    streetAddress: '',
    
    // Shipment Details
    serviceType: '',
    weight: '',
    freightDescription: '',
    
    // Pick-up & Delivery
    length: '',
    height: '',
    width: '',
    origin: '',
    destination: '',
    pickupDate: '',
    deliveryDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Quote request submitted:', formData);
    alert('Thank you! Your quote request has been submitted. We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-blue-800 font-bold text-sm uppercase tracking-wide mb-2">
                REQUEST A QUOTE
              </h1>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Shipping solutions<br />
                you can count on
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you have a single shipment or require a customized solution, we've 
                got you covered. Backed by years of experience serving a wide variety of 
                industries, our team understands what's required to move and is always 
                ready for the next challenge.
              </p>
            </div>
            
            <div className="pt-8">
              <p className="text-gray-900 text-lg mb-4">
                Want to speak with someone right now? We're available.
              </p>
              <div className="space-y-2">
                <a href="tel:1-844-294-1058" className="text-blue-800 hover:text-blue-900 font-semibold text-lg block">
                  1-844-294-1058
                </a>
                <a href="mailto:info@xtransport.ca" className="text-blue-800 hover:text-blue-900 font-semibold text-lg block">
                  info@xtransport.ca
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <div className="space-y-8">
              
              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                  CONTACT INFORMATION
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company name"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="streetAddress"
                      placeholder="Street address"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Shipment Details */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                  SHIPMENT DETAILS
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    >
                      <option value="">Service Type</option>
                      <option value="cross-border">Cross-Border Transportation</option>
                      <option value="dry-van-reefer">Dry Van & Refrigerated (Reefer) Transportation</option>
                      <option value="flatbed">Flatbed Shipping</option>
                      <option value="heavy-haul">Heavy Haul & Over Dimensional</option>
                      <option value="intermodal">Intermodal / Multimodal Transportation</option>
                      <option value="project-management">Project Management & Logistics</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="weight"
                      placeholder="Weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div>
                  <textarea
                    name="freightDescription"
                    placeholder="Freight Description"
                    value={formData.freightDescription}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Pick-up & Delivery */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-wide">
                  PICK-UP & DELIVERY
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="length"
                      placeholder="Length"
                      value={formData.length}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="height"
                      placeholder="Height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="width"
                      placeholder="Width"
                      value={formData.width}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <input
                      type="text"
                      name="origin"
                      placeholder="Origin"
                      value={formData.origin}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="destination"
                      placeholder="Destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Desired Loading
                    </label>
                    <input
                      type="date"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Desired Delivery
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-md transition-colors duration-200 uppercase tracking-wide text-sm"
                >
                  SUBMIT REQUEST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}