import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Plot 123, Gimbiya Street',
        'Area 11, Garki, Abuja',
        'Federal Capital Territory',
        'Nigeria'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        '+234 9 123 4567',
        '+234 8 098 7654',
        'WhatsApp: +234 8 098 7654'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@gcewatch.org',
        'programs@gcewatch.org',
        'partnerships@gcewatch.org'
      ]
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Emergency: 24/7 Hotline'
      ]
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Information' },
    { value: 'volunteer', label: 'Volunteer Opportunities' },
    { value: 'partnership', label: 'Partnership Inquiries' },
    { value: 'donation', label: 'Donation Questions' },
    { value: 'media', label: 'Media & Press' },
    { value: 'program', label: 'Program Information' }
  ];

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com/gcewatch', color: 'bg-blue-600' },
    { name: 'Twitter', url: 'https://twitter.com/gcewatch', color: 'bg-blue-400' },
    { name: 'Instagram', url: 'https://instagram.com/gcewatch', color: 'bg-pink-600' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/gcewatch', color: 'bg-blue-700' },
    { name: 'YouTube', url: 'https://youtube.com/gcewatch', color: 'bg-red-600' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100">
              Get in touch with us to learn more about our programs, volunteer opportunities, 
              or to discuss how you can support girls' education in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Here's how you can reach us.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                <div className="flex items-center mb-8">
                  <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Send Us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </div>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Our Office</h3>
                    <p className="text-gray-600">
                      Plot 123, Gimbiya Street<br />
                      Area 11, Garki, Abuja, FCT
                    </p>
                    <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick Contact Options */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-green-600 mr-3" />
                  Quick Contact Options
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-green-50 rounded-xl">
                    <Phone className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Call Us Directly</p>
                      <p className="text-green-600">+234 9 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">Email Support</p>
                      <p className="text-blue-600">info@gcewatch.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                    <MessageSquare className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-purple-600">+234 8 098 7654</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Follow Our Journey</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected and follow our daily impact on girls' education across Nigeria.
                </p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity duration-200`}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Find quick answers to common questions about our work</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How can I volunteer with GCEWATCH?</h3>
              <p className="text-gray-600">
                We welcome volunteers with various skills and time commitments. Visit our Get Involved page 
                or contact us directly to learn about current opportunities that match your interests and availability.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Where can I make a donation?</h3>
              <p className="text-gray-600">
                You can make secure online donations through our Get Involved page using various payment methods 
                including Paystack, Flutterwave, and international credit cards. We also accept bank transfers and mobile money.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Do you work in my area?</h3>
              <p className="text-gray-600">
                We currently operate across 15 communities in Northern Nigeria, focusing on Kano, Kaduna, Sokoto, 
                and surrounding states. Contact us to discuss potential expansion to new areas.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How can schools partner with GCEWATCH?</h3>
              <p className="text-gray-600">
                Schools interested in partnership can contact our Programs team. We work with institutions 
                committed to girls' education and gender equality to implement comprehensive support programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Whether you want to volunteer, donate, or partner with us, we're here to help you 
            find the perfect way to support girls' education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Involved Now
            </a>
            <a
              href="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn About Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;