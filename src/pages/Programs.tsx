import React from 'react';
import { GraduationCap, Users, Laptop, Heart, BookOpen, Award, Calendar, MapPin } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'School Support Program',
      description: 'Comprehensive support to keep girls in school through scholarships, uniforms, books, and mentorship.',
      icon: GraduationCap,
      image: 'https://images.pexels.com/photos/8923775/pexels-photo-8923775.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '500+ girls',
        locations: '12 states',
        successRate: '95% retention rate'
      },
      features: [
        'Full and partial scholarships',
        'School uniforms and supplies',
        'Mentorship programs',
        'Academic support and tutoring',
        'Health and nutrition support'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Community Advocacy Initiative',
      description: 'Working with traditional leaders, parents, and communities to change attitudes toward girls education.',
      icon: Users,
      image: 'https://images.pexels.com/photos/8923844/pexels-photo-8923844.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '25 communities',
        locations: '8 states',
        successRate: '80% attitude change'
      },
      features: [
        'Community dialogue sessions',
        'Traditional leader engagement',
        'Parent education programs',
        'Religious leader partnerships',
        'Policy advocacy'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      title: 'Digital Skills Training',
      description: 'Equipping girls with 21st-century skills including computer literacy, coding, and digital entrepreneurship.',
      icon: Laptop,
      image: 'https://images.pexels.com/photos/8923865/pexels-photo-8923865.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '300+ girls',
        locations: '6 centers',
        successRate: '90% completion rate'
      },
      features: [
        'Basic computer skills',
        'Introduction to coding',
        'Digital entrepreneurship',
        'Online safety training',
        'Career guidance'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      title: 'Leadership Development',
      description: 'Building confident young leaders through workshops, public speaking, and leadership opportunities.',
      icon: Award,
      image: 'https://images.pexels.com/photos/8923889/pexels-photo-8923889.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '200+ girls',
        locations: '10 centers',
        successRate: '85% leadership roles'
      },
      features: [
        'Leadership workshops',
        'Public speaking training',
        'Project management skills',
        'Peer mentoring programs',
        'Youth advisory council'
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      title: 'Health & Wellness Program',
      description: 'Comprehensive health education, mental health support, and reproductive health awareness.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/8923795/pexels-photo-8923795.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '400+ girls',
        locations: '8 clinics',
        successRate: '100% health coverage'
      },
      features: [
        'Health education sessions',
        'Mental health support',
        'Reproductive health awareness',
        'Nutrition programs',
        'Regular health checkups'
      ],
      color: 'from-pink-500 to-red-500',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200'
    },
    {
      title: 'After-School Learning Centers',
      description: 'Safe spaces for girls to study, receive tutoring, and participate in extracurricular activities.',
      icon: BookOpen,
      image: 'https://images.pexels.com/photos/8923742/pexels-photo-8923742.jpeg?auto=compress&cs=tinysrgb&w=600',
      impact: {
        beneficiaries: '350+ girls',
        locations: '15 centers',
        successRate: '92% grade improvement'
      },
      features: [
        'After-school tutoring',
        'Library and study spaces',
        'STEM activities',
        'Arts and crafts',
        'Life skills training'
      ],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  const upcomingEvents = [
    {
      title: 'Girls in STEM Workshop',
      date: 'March 15, 2024',
      location: 'Abuja, FCT',
      description: 'Three-day intensive workshop on Science, Technology, Engineering, and Mathematics for girls.'
    },
    {
      title: 'Community Leaders Summit',
      date: 'March 22, 2024',
      location: 'Kaduna State',
      description: 'Bringing together traditional and religious leaders to champion girls education.'
    },
    {
      title: 'Annual Scholarship Awards',
      date: 'April 5, 2024',
      location: 'Lagos State',
      description: 'Celebrating academic excellence and awarding scholarships to outstanding students.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs & Projects
            </h1>
            <p className="text-xl text-green-100">
              Comprehensive initiatives designed to support girls' education at every level, 
              from community advocacy to individual empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transforming Lives Through Education
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our multi-faceted approach addresses the various barriers to girls' education 
              in Nigeria through targeted interventions and community partnerships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className={`bg-white border-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${program.borderColor}`}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 p-8">
                      <div className="flex items-center mb-4">
                        <div className={`bg-gradient-to-br ${program.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                      
                      {/* Impact Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className={`${program.bgColor} p-3 rounded-lg text-center`}>
                          <p className="text-sm font-semibold text-gray-700">Beneficiaries</p>
                          <p className="text-lg font-bold text-gray-900">{program.impact.beneficiaries}</p>
                        </div>
                        <div className={`${program.bgColor} p-3 rounded-lg text-center`}>
                          <p className="text-sm font-semibold text-gray-700">Locations</p>
                          <p className="text-lg font-bold text-gray-900">{program.impact.locations}</p>
                        </div>
                        <div className={`${program.bgColor} p-3 rounded-lg text-center`}>
                          <p className="text-sm font-semibold text-gray-700">Success</p>
                          <p className="text-lg font-bold text-gray-900">{program.impact.successRate}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Program Features:</h4>
                        <ul className="space-y-2">
                          {program.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/3">
                      <img
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover min-h-64"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Collective Impact</h2>
            <p className="text-lg text-gray-600">Measuring success through real change in girls' lives</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,250+</div>
              <div className="text-gray-700 font-medium">Girls Directly Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">45</div>
              <div className="text-gray-700 font-medium">Schools Partnered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">25</div>
              <div className="text-gray-700 font-medium">Communities Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-gray-700 font-medium">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for upcoming workshops, summits, and community events
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-blue-600 font-semibold">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{event.description}</p>
                <button className="mt-4 text-green-600 font-semibold hover:text-green-700 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Support Our Programs
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Your contribution can help us expand these life-changing programs to reach more girls across Nigeria.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Donate Now
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;