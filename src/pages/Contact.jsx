import React, { useState } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, User,
  MessageSquare, Truck, Shield, Calculator,
  Users, Building2
} from 'lucide-react';

import truckBackground from '../assets/truck2.jpg'; // ✅ Adjust the path if needed

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
    console.log('Form submitted:', formData);
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${truckBackground})` }} >
        <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Top Glass Overlay */}
  <div className="absolute inset-x-0 top-0 h-40 bg-white/0 backdrop-blur-md z-0" />

  {/* Bottom Glass Overlay */}
  {/* <div className="absolute inset-x-0 bottom-0 h-40 bg-white/10 backdrop-blur-md z-0" /> */}

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section
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
        </div> */}

        {/* Contact Info Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">Our Contact Information</h2>
            <p className="text-lg text-blue-300">Reach out to the right department for faster service</p>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Dispatch */}
            <ContactCard
              icon={<Truck className="w-6 h-6 text-white" />}
              bgColor="bg-blue-500"
              title="Dispatch"
              email="shipping@xtransport.ca"
              phone="368-599-9677 x 1"
              textColor="text-blue-500"
              hoverColor="hover:text-blue-600"
            />
            {/* Safety */}
            <ContactCard
              icon={<Shield className="w-6 h-6 text-white" />}
              bgColor="bg-green-500"
              title="Safety & Compliance"
              email="compliance@xtransport.ca"
              phone="368-599-9677 x 3"
              textColor="text-green-500"
              hoverColor="hover:text-green-600"
            />
            {/* General */}
            <ContactCard
              icon={<MessageSquare className="w-6 h-6 text-white" />}
              bgColor="bg-purple-500"
              title="General Inquiries"
              email="info@xtransport.ca"
              phone="368-599-9677 x 0"
              textColor="text-purple-500"
              hoverColor="hover:text-purple-600"
            />
            {/* Accounting */}
            <ContactCard
              icon={<Calculator className="w-6 h-6 text-white" />}
              bgColor="bg-orange-500"
              title="Accounting"
              email="accounting@xtransport.ca"
              phone="368-599-9677 x 2"
              textColor="text-orange-500"
              hoverColor="hover:text-orange-600"
            />
          </div>

          {/* Contact Form and Office Info */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputWithIcon
                    label="Full Name *"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    icon={<User className="w-5 h-5 text-gray-400" />}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <InputWithIcon
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    icon={<Phone className="w-5 h-5 text-gray-400" />}
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <InputWithIcon
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  icon={<Mail className="w-5 h-5 text-gray-400" />}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
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

            {/* Office Info */}
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
                      <p className="text-gray-600">Mon–Fri: 8 AM – 6 PM</p>
                      <p className="text-gray-600">24/7 Emergency Service</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="text-blue-100 mb-4">
                  Need urgent transportation? Our emergency dispatch team is available 24/7.
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
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] [background-size:50px_50px]"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-blue-400">References</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Trusted partners who vouch for our service
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Leggo Transport Inc.',
                  email: 'dispatch@leggotransport.com',
                  phone: '431-999-0470',
                  color: 'blue'
                },
                {
                  name: 'Ts Sethi Transport Inc.',
                  email: 'dispatch@tssethitransport.com',
                  phone: '587-997-3444',
                  color: 'green'
                },
                {
                  name: 'Every Way Transport Ltd.',
                  email: 'info@ewtl.ca',
                  phone: '204-963-174',
                  color: 'purple'
                }
              ].map((ref, idx) => (
                <div
                  key={idx}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className={`bg-${ref.color}-500 w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{ref.name}</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex items-center">
                      <Mail className={`w-4 h-4 mr-3 text-${ref.color}-400`} />
                      <a href={`mailto:${ref.email}`} className="hover:text-white">{ref.email}</a>
                    </div>
                    <div className="flex items-center">
                      <Phone className={`w-4 h-4 mr-3 text-${ref.color}-400`} />
                      <a href={`tel:${ref.phone}`} className="hover:text-white">{ref.phone}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-300 text-lg">
                Need more references? Contact us for additional testimonials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Field with Icon
const InputWithIcon = ({ label, name, type, placeholder, icon, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative">
      <div className="absolute left-3 top-3">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  </div>
);

// Reusable Contact Card
const ContactCard = ({ icon, bgColor, title, email, phone, textColor, hoverColor }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <div className="space-y-2">
      <div className={`flex items-center text-gray-600`}>
        <Mail className={`w-4 h-4 mr-2 ${textColor}`} />
        <a href={`mailto:${email}`} className={`${hoverColor} transition-colors`}>
          {email}
        </a>
      </div>
      <div className={`flex items-center text-gray-600`}>
        <Phone className={`w-4 h-4 mr-2 ${textColor}`} />
        <a href={`tel:${phone}`} className={`${hoverColor} transition-colors`}>
          {phone}
        </a>
      </div>
    </div>
  </div>
);

export default ContactUs;
