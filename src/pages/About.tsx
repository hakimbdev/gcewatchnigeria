import React from 'react';
import { Target, Eye, Heart, Award, Users, BookOpen } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'We believe in empowering girls to reach their full potential through quality education and life skills.'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'We ensure that every girl, regardless of background or circumstance, has access to educational opportunities.'
    },
    {
      icon: BookOpen,
      title: 'Excellence',
      description: 'We strive for excellence in all our programs and maintain the highest standards of impact measurement.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and honesty in all our interactions and programs.'
    }
  ];

  const team = [
    {
      name: 'Dr. Aisha Mohammed',
      position: 'Founder & Executive Director',
      bio: 'A passionate advocate for girls education with 15+ years experience in development work.',
      image: 'https://images.pexels.com/photos/8923889/pexels-photo-8923889.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'PhD in Educational Development'
    },
    {
      name: 'Khadijah Usman',
      position: 'Program Director',
      bio: 'Leading our field programs with expertise in community engagement and educational policy.',
      image: 'https://images.pexels.com/photos/8923891/pexels-photo-8923891.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'MSc in Development Studies'
    },
    {
      name: 'Hauwa Garba',
      position: 'Community Outreach Manager',
      bio: 'Connecting with grassroots communities to ensure sustainable educational change.',
      image: 'https://images.pexels.com/photos/8923742/pexels-photo-8923742.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'BA in Social Work'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About GCEWATCH
            </h1>
            <p className="text-xl text-blue-100">
              Girl Child Education Watch is dedicated to transforming the lives of girls 
              across Nigeria through quality education, community engagement, and advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  GCEWATCH was founded in 2016 by Dr. Aisha Mohammed, who witnessed firsthand 
                  the challenges facing girls' education in Northern Nigeria. After working 
                  with international development organizations for over a decade, she recognized 
                  the need for a locally-driven solution.
                </p>
                <p>
                  What started as a small scholarship program for 20 girls has grown into 
                  a comprehensive initiative reaching over 1,250 girls across 15 communities. 
                  Our approach combines direct support with systemic change, working closely 
                  with parents, traditional leaders, and government officials.
                </p>
                <p>
                  Today, we are proud to be recognized as a leading voice in girls' education 
                  advocacy in Nigeria, with partnerships spanning from grassroots communities 
                  to international organizations.
                </p>
              </div>
            </div>
            <div className="lg:pl-8">
              <img
                src="https://images.pexels.com/photos/8923795/pexels-photo-8923795.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our founding story"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To ensure every girl child in Nigeria has access to quality education, 
                empowering them to become leaders, innovators, and change-makers in their communities.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A Nigeria where every girl completes quality education and has equal opportunities 
                to contribute meaningfully to the development of her community and nation.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-8">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Impact</h3>
              <p className="text-gray-700 leading-relaxed">
                Since 2016, we have directly supported over 1,250 girls, engaged 25 communities, 
                and influenced policy changes at state and national levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do and shape how we work with communities, 
              partners, and the girls we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the passionate leaders driving change in girls' education across Nigeria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-green-600 font-medium mb-4">{member.education}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Together, we can ensure that every girl has the opportunity to learn, 
            grow, and become the leader she was meant to be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-involved"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Get Involved
            </a>
            <a
              href="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              See Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;