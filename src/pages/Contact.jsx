import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Truck, Shield, Calculator, Users, Building2 } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert team for all your heavy hauling needs
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Contact Information</h2>
          <p className="text-lg text-gray-600">Reach out to the right department for faster service</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Dispatch */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dispatch</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-blue-500" />
                <a href="mailto:shipping@xtransport.ca" className="hover:text-blue-600 transition-colors">
                  shipping@xtransport.ca
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-blue-500" />
                <a href="tel:368-599-9677" className="hover:text-blue-600 transition-colors">
                  368-599-9677 x 1
                </a>
              </div>
            </div>
          </div>

          {/* Safety and Compliance */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety & Compliance</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-green-500" />
                <a href="mailto:compliance@xtransport.ca" className="hover:text-green-600 transition-colors">
                  compliance@xtransport.ca
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-green-500" />
                <a href="tel:368-599-9677" className="hover:text-green-600 transition-colors">
                  368-599-9677 x 3
                </a>
              </div>
            </div>
          </div>

          {/* General */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">General Inquiries</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-purple-500" />
                <a href="mailto:info@xtransport.ca" className="hover:text-purple-600 transition-colors">
                  info@xtransport.ca
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-purple-500" />
                <a href="tel:368-599-9677" className="hover:text-purple-600 transition-colors">
                  368-599-9677 x 0
                </a>
              </div>
            </div>
          </div>

          {/* Accounting */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Accounting</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Mail className="w-4 h-4 mr-2 text-orange-500" />
                <a href="mailto:accounting@xtransport.ca" className="hover:text-orange-600 transition-colors">
                  accounting@xtransport.ca
                </a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-4 h-4 mr-2 text-orange-500" />
                <a href="tel:368-599-9677" className="hover:text-orange-600 transition-colors">
                  368-599-9677 x 2
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form and Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Heavy Equipment Transport Inquiry"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your transportation needs..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Company Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Head Office</p>
                    <p className="text-gray-600">123 Transport Way</p>
                    <p className="text-gray-600">Toronto, ON M5V 3A8</p>
                    <p className="text-gray-600">Canada</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-6 h-6 text-blue-500 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Business Hours</p>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">24/7 Emergency Service Available</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
              <p className="text-blue-100 mb-4">
                Need urgent transportation services? Our emergency dispatch team is available 24/7 to handle your critical shipments.
              </p>
              <a
                href="tel:368-599-9677"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 368-599-9677
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-cover bg-center" style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="ref-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="2" fill="white" opacity="0.1"/></pattern></defs><rect width="1000" height="1000" fill="url(%23ref-pattern)"/></svg>')`
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-400">References</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted partners who can vouch for our reliability and professional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Leggo Transport Inc. */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Leggo Transport Inc.</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="mailto:dispatch@leggotransport.com" className="hover:text-white transition-colors">
                    dispatch@leggotransport.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <a href="tel:431-999-0470" className="hover:text-white transition-colors">
                    431-999-0470
                  </a>
                </div>
              </div>
            </div>

            {/* Ts Sethi Transport Inc. */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ts Sethi Transport Inc.</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-green-400" />
                  <a href="mailto:dispatch@tssethitransport.com" className="hover:text-white transition-colors">
                    dispatch@tssethitransport.com
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <a href="tel:587-997-3444" className="hover:text-white transition-colors">
                    587-997-3444
                  </a>
                </div>
              </div>
            </div>

            {/* Every Way Transport Ltd. */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Every Way Transport Ltd.</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-purple-400" />
                  <a href="mailto:info@ewtl.ca" className="hover:text-white transition-colors">
                    info@ewtl.ca
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-purple-400" />
                  <a href="tel:204-963-174" className="hover:text-white transition-colors">
                    204-963-174
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg">
              Need additional references? Contact us and we'll be happy to provide more testimonials from our satisfied clients.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ContactUs;