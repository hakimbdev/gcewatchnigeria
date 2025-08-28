import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Heart, Award, ChevronRight, Play } from 'lucide-react';

const Home = () => {
  const stats = [
    { number: '1,250+', label: 'Girls Educated', icon: BookOpen },
    { number: '45', label: 'Schools Supported', icon: Users },
    { number: '15', label: 'Communities Reached', icon: Heart },
    { number: '8', label: 'Years of Impact', icon: Award },
  ];

  const programs = [
    {
      title: 'School Support Program',
      description: 'Providing scholarships, uniforms, and learning materials to ensure girls stay in school.',
      image: 'https://images.pexels.com/photos/8923775/pexels-photo-8923775.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '500+ girls supported',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Community Advocacy',
      description: 'Engaging parents and community leaders to champion girls education and end harmful practices.',
      image: 'https://images.pexels.com/photos/8923844/pexels-photo-8923844.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '25 communities engaged',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Skills Development',
      description: 'Teaching digital literacy, leadership, and life skills to empower young women.',
      image: 'https://images.pexels.com/photos/8923865/pexels-photo-8923865.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: '300+ girls trained',
      color: 'bg-yellow-50 border-yellow-200'
    }
  ];

  const stories = [
    {
      name: 'Amina Sani',
      age: 16,
      story: 'From being out of school to becoming a science student leader',
      location: 'Kano State',
      image: 'https://images.pexels.com/photos/8923742/pexels-photo-8923742.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Fatima Ahmed',
      age: 18,
      story: 'First in her family to complete secondary school',
      location: 'Kaduna State',
      image: 'https://images.pexels.com/photos/8923756/pexels-photo-8923756.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8923881/pexels-photo-8923881.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Girls Through
              <span className="text-yellow-300"> Education</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Every girl deserves the chance to learn, grow, and transform her community. 
              Join us in breaking barriers and creating opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/get-involved"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-center"
              >
                Donate Now
              </Link>
              <Link
                to="/programs"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center"
              >
                Our Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            To ensure every girl child in Nigeria has access to quality education, 
            empowering them to become leaders, innovators, and change-makers in their communities. 
            We believe education is the most powerful tool for breaking the cycle of poverty and inequality.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
          >
            Learn more about us
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Programs Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Impact Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across multiple areas to ensure comprehensive support for girls' education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className={`border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${program.color}`}>
                <div className="h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-green-600">{program.impact}</span>
                    <Link
                      to="/programs"
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the incredible girls whose lives have been transformed through education
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {stories.map((story, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600">Age {story.age} • {story.location}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-lg italic mb-6">"{story.story}"</p>
                <Link
                  to="/news"
                  className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                >
                  Read Full Story →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Your support can transform a girl's life forever. Every donation, every volunteer hour, 
            every shared story brings us closer to our goal of universal girls' education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-involved"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;