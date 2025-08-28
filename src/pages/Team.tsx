import React from 'react';
import { Mail, Linkedin, Twitter, MapPin, GraduationCap, Award, Users, Heart } from 'lucide-react';

const Team = () => {
  const leadership = [
    {
      name: 'Abdulhakim Ahmad, CPM',
      position: 'Founder & Executive Director',
      bio: 'A passionate advocate for girls education with 15+ years experience in development work. Abdulhakim founded GCEWATCH Nigeria after witnessing the transformative power of education in rural communities.',
      image: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1756380544/20250802_1049_Confident_Lawyer_at_Desk_remix_01k1n2wz6sfadbc2bd7tkdj08y_ikjjw6.png',
      education: 'Masters in Educational Technology & Development',
      experience: '15+ years',
      email: 'aahmaddadani@gmail.com',
    },
     {
      name: 'Dr. Maikano Garkuwa',
      position: 'Chairman, Board of Trustee',
      image: 'https://res.cloudinary.com/da8ptobvx/image/upload/v1756381078/Maikano_Garkuwa_id3fk1.png',
      experience: '45+ years',
      email: 'maikanogarkuwa73@gmail.com',
    }, 
    {
      name: 'Khadijah Usman',
      position: 'Program Director',
      bio: 'Leading our field programs with expertise in community engagement and educational policy. Khadijah has successfully implemented education programs across 12 Nigerian states.',
      image: 'https://images.pexels.com/photos/8923891/pexels-photo-8923891.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MSc in Development Studies, Ahmadu Bello University',
      experience: '12+ years',
      email: 'khadijah.usman@gcewatch.org',
      linkedin: '#',
      twitter: '#',
      achievements: ['Community Impact Award 2023', 'Excellence in Program Management 2022']
    },
    {
      name: 'Fatima Abdullahi',
      position: 'Operations Manager',
      bio: 'Ensuring smooth operations and strategic partnerships. Fatima brings extensive experience in NGO management and has been instrumental in scaling our programs.',
      image: 'https://images.pexels.com/photos/8923893/pexels-photo-8923893.jpeg?auto=compress&cs=tinysrgb&w=400',
      education: 'MBA in Non-Profit Management, University of Lagos',
      experience: '10+ years',
      email: 'fatima.abdullahi@gcewatch.org',
      linkedin: '#',
      twitter: '#',
      achievements: ['Operational Excellence Award 2023', 'Strategic Partnership Award 2021']
    }
  ];

  const programTeam = [
    {
      name: 'Zainab Ibrahim',
      position: 'Education Specialist',
      bio: 'Developing curriculum and training materials for our education programs.',
      image: 'https://images.pexels.com/photos/8923895/pexels-photo-8923895.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'MEd in Curriculum Development',
      location: 'Abuja, Nigeria'
    },
    {
      name: 'Hauwa Garba',
      position: 'Community Outreach Coordinator',
      bio: 'Building relationships with communities and local leaders to support girls education.',
      image: 'https://images.pexels.com/photos/8923897/pexels-photo-8923897.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'BSc in Social Work',
      location: 'Kano, Nigeria'
    },
    {
      name: 'Amina Yusuf',
      position: 'Research & Advocacy Officer',
      bio: 'Conducting research on girls education barriers and advocating for policy changes.',
      image: 'https://images.pexels.com/photos/8923899/pexels-photo-8923899.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'MSc in Public Policy',
      location: 'Lagos, Nigeria'
    },
    {
      name: 'Maryam Aliyu',
      position: 'Digital Skills Trainer',
      bio: 'Leading our digital literacy programs and technology training initiatives.',
      image: 'https://images.pexels.com/photos/8923901/pexels-photo-8923901.jpeg?auto=compress&cs=tinysrgb&w=300',
      education: 'BSc in Computer Science',
      location: 'Kaduna, Nigeria'
    }
  ];

  const advisoryBoard = [
    {
      name: 'Prof. Salamatu Suleiman',
      position: 'Education Policy Advisor',
      bio: 'Former Director of Education, Federal Ministry of Education',
      image: 'https://images.pexels.com/photos/8923903/pexels-photo-8923903.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Education Policy & Reform'
    },
    {
      name: 'Dr. Hadiza Bala Usman',
      position: 'Strategic Development Advisor',
      bio: 'Former Managing Director, Nigerian Ports Authority',
      image: 'https://images.pexels.com/photos/8923905/pexels-photo-8923905.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Strategic Management & Governance'
    },
    {
      name: 'Aisha Yesufu',
      position: 'Advocacy & Communications Advisor',
      bio: 'Renowned activist and advocate for social justice',
      image: 'https://images.pexels.com/photos/8923907/pexels-photo-8923907.jpeg?auto=compress&cs=tinysrgb&w=300',
      expertise: 'Advocacy & Social Mobilization'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Passionate professionals dedicated to transforming girls' education across Nigeria
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visionary leaders driving change in girls' education across Nigeria
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-blue-100"
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <div className="flex items-center justify-center text-sm text-gray-600 mb-4">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{member.experience}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                
                <div className="space-y-3 mb-6">
                  {member.education && (
                    <div className="flex items-start">
                      <GraduationCap className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{member.education}</span>
                    </div>
                  )}
                  
                  {member.achievements && (
                    <div className="flex items-start">
                      <Award className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-600">
                        {member.achievements.map((achievement, idx) => (
                          <div key={idx}>{achievement}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center space-x-4 pt-4 border-t border-gray-100">
                  <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>
                  <a href={member.linkedin} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.twitter} className="text-blue-600 hover:text-blue-700 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Program Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals implementing our programs on the ground
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programTeam.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-green-100"
                  />
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-2">{member.position}</p>
                  <div className="flex items-center justify-center text-xs text-gray-600 mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{member.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{member.bio}</p>
                  <div className="flex items-center justify-center text-xs text-green-600">
                    <GraduationCap className="h-3 w-3 mr-1" />
                    <span>{member.education}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advisory Board
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Distinguished leaders providing strategic guidance and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-3 border-white shadow-lg"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                  <p className="text-gray-600 leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex items-center justify-center text-sm text-green-600 font-medium">
                    <Award className="h-4 w-4 mr-2" />
                    <span>{member.expertise}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team Impact
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Together, we're making a difference in girls' education across Nigeria
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Team Members</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">150+</div>
              <div className="text-blue-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">12</div>
              <div className="text-blue-100">States Covered</div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">1,250+</div>
              <div className="text-blue-100">Girls Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Are you passionate about girls' education and want to make a difference?
            We're always looking for dedicated individuals to join our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@gcewatch.org"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View Open Positions
            </a>
            <a
              href="mailto:volunteer@gcewatch.org"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
