import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, Send, User,
  MessageSquare, Truck, Shield, Calculator
} from 'lucide-react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import truckBackground from '../assets/truck2.jpg';
import { useApi } from '../context/ApiContext';

const ContactUs = () => {
  const { API_BASE_URL } = useApi();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = { ...formData };

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Server Error');

      toast.success('We will reach out to you soon! ✅');

      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      toast.error('We are facing some issues right now. Please try again later ❌');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${truckBackground})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />
      <div className="absolute inset-x-0 top-0 h-40 bg-white/0 backdrop-blur-md z-0" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4">Our Contact Information</h2>
            <p className="text-base sm:text-lg text-blue-300">Reach out to the right department for faster service</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <ContactCard
              icon={<Truck className="w-6 h-6 text-white" />}
              bgColor="bg-blue-500"
              title="Dispatch"
              email="shipping@xtransport.ca"
              phone="368-599-9677 x 1"
              textColor="text-blue-500"
              hoverColor="hover:text-blue-600"
            />
            <ContactCard
              icon={<Shield className="w-6 h-6 text-white" />}
              bgColor="bg-green-500"
              title="Safety & Compliance"
              email="compliance@xtransport.ca"
              phone="368-599-9677 x 3"
              textColor="text-green-500"
              hoverColor="hover:text-green-600"
            />
            <ContactCard
              icon={<MessageSquare className="w-6 h-6 text-white" />}
              bgColor="bg-purple-500"
              title="General Inquiries"
              email="info@xtransport.ca"
              phone="368-599-9677 x 0"
              textColor="text-purple-500"
              hoverColor="hover:text-purple-600"
            />
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder="Please describe your transportation needs..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-500 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Head Office</p>
                      <p className="text-gray-600">236 Willowmere Way</p>
                      <p className="text-gray-600">Chestermere, AB T1X 0E1</p>
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

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 sm:p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Service</h3>
                <p className="text-blue-100 mb-4">
                  Need urgent transportation? Our emergency dispatch team is available 24/7.
                </p>
                <a
                  href="tel:368-599-9677"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 368-599-9677
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

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
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
      />
    </div>
  </div>
);

const ContactCard = ({ icon, bgColor, title, email, phone, textColor, hoverColor }) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className={`${bgColor} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <div className="space-y-2 text-sm">
      <div className="flex items-center text-gray-600">
        <Mail className={`w-4 h-4 mr-2 ${textColor}`} />
        <a href={`mailto:${email}`} className={`${hoverColor} transition-colors`}>
          {email}
        </a>
      </div>
      <div className="flex items-center text-gray-600">
        <Phone className={`w-4 h-4 mr-2 ${textColor}`} />
        <a href={`tel:${phone}`} className={`${hoverColor} transition-colors`}>
          {phone}
        </a>
      </div>
    </div>
  </div>
);

export default ContactUs;
