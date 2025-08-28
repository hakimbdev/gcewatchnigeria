import React, { useState } from 'react';
import { Heart, Users, Briefcase, Globe, CreditCard, Smartphone, DollarSign, HandHeart } from 'lucide-react';

const GetInvolved = () => {
  const [donationAmount, setDonationAmount] = useState('50');
  const [donationType, setDonationType] = useState('monthly');

  const volunteerOpportunities = [
    {
      title: 'Academic Mentors',
      description: 'Guide girls in their studies and provide academic support',
      commitment: '4 hours/week',
      icon: Users,
      requirements: ['Bachelor\'s degree', 'Teaching or mentoring experience', 'Passion for education']
    },
    {
      title: 'Community Outreach',
      description: 'Help with community engagement and advocacy programs',
      commitment: '6 hours/month',
      icon: Globe,
      requirements: ['Strong communication skills', 'Community engagement experience', 'Local language fluency']
    },
    {
      title: 'Digital Skills Trainers',
      description: 'Teach computer literacy and digital skills',
      commitment: '8 hours/month',
      icon: Smartphone,
      requirements: ['IT/Computer background', 'Training experience', 'Patience with beginners']
    },
    {
      title: 'Program Coordinators',
      description: 'Help organize events, workshops, and program activities',
      commitment: '10 hours/month',
      icon: Briefcase,
      requirements: ['Organizational skills', 'Event planning experience', 'Leadership abilities']
    }
  ];

  const partnershipTiers = [
    {
      name: 'Education Champion',
      amount: '$500/month',
      benefits: [
        'Support 5 girls with full scholarships',
        'Quarterly impact reports',
        'Invitation to annual events',
        'Recognition on website'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'Community Partner',
      amount: '$1,000/month',
      benefits: [
        'Support entire community program',
        'Monthly progress updates',
        'Partnership certificate',
        'Co-branding opportunities',
        'Site visit opportunities'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'Strategic Alliance',
      amount: '$2,500/month',
      benefits: [
        'Co-design program initiatives',
        'Dedicated liaison officer',
        'Custom impact measurement',
        'Joint media opportunities',
        'Advisory board participation'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const donationOptions = [
    { amount: '25', impact: 'Provides school supplies for 1 girl' },
    { amount: '50', impact: 'Covers school fees for 1 month' },
    { amount: '100', impact: 'Supports full scholarship for 1 term' },
    { amount: '250', impact: 'Funds digital skills training for 5 girls' },
    { amount: '500', impact: 'Supports community advocacy program' },
    { amount: 'custom', impact: 'Choose your own amount' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get Involved
            </h1>
            <p className="text-xl text-green-100">
              Join us in transforming the lives of girls through education. 
              There are many ways to make a difference - find the one that works for you.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ways to Make a Difference
            </h2>
            <p className="text-xl text-gray-600">
              Every contribution, no matter the size, helps us reach more girls with quality education
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Donate</h3>
              <p className="text-gray-600">One-time or monthly donations to support our programs directly</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Volunteer</h3>
              <p className="text-gray-600">Share your skills and time to directly impact girls' lives</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partner</h3>
              <p className="text-gray-600">Corporate partnerships and strategic alliances</p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Advocate</h3>
              <p className="text-gray-600">Raise awareness and advocate for girls' education in your network</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Make a Donation
            </h2>
            <p className="text-xl text-gray-600">
              Your generosity directly translates to educational opportunities for girls across Nigeria
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Donation Form */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Donation</h3>
                
                {/* Donation Type */}
                <div className="mb-6">
                  <div className="flex gap-4 mb-4">
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        donationType === 'monthly'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                        donationType === 'one-time'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      One-time
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {donationOptions.filter(option => option.amount !== 'custom').map((option) => (
                    <button
                      key={option.amount}
                      onClick={() => setDonationAmount(option.amount)}
                      className={`p-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                        donationAmount === option.amount
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      ${option.amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount:
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Payment Methods:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors duration-200 cursor-pointer">
                      <CreditCard className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                      <span className="text-sm font-medium">Card</span>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors duration-200 cursor-pointer">
                      <Smartphone className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                      <span className="text-sm font-medium">Paystack</span>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 text-center hover:border-green-500 transition-colors duration-200 cursor-pointer">
                      <HandHeart className="h-8 w-8 mx-auto mb-2 text-gray-600" />
                      <span className="text-sm font-medium">Flutterwave</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                  Donate ${donationAmount} {donationType === 'monthly' ? '/month' : ''}
                </button>
              </div>

              {/* Impact Information */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
                
                <div className="space-y-6">
                  {donationOptions.slice(0, 5).map((option) => (
                    <div key={option.amount} className="flex items-start">
                      <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center mr-4 mt-1">
                        <span className="text-white font-bold text-sm">${option.amount}</span>
                      </div>
                      <p className="text-gray-700">{option.impact}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl">
                  <h4 className="font-bold text-gray-900 mb-3">100% Impact Guarantee</h4>
                  <p className="text-gray-600 text-sm">
                    Every dollar you donate goes directly to our programs. 
                    Administrative costs are covered by separate grants and partnerships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600">
              Use your skills and passion to directly impact girls' education
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerOpportunities.map((opportunity, index) => {
              const Icon = opportunity.icon;
              return (
                <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-lg hover:border-green-300 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                      <p className="text-green-600 font-medium">{opportunity.commitment}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Corporate Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Partner with us to create lasting change in girls' education
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <div key={index} className={`${tier.bgColor} border-2 border-opacity-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <div className={`bg-gradient-to-br ${tier.color} inline-block px-4 py-2 rounded-full text-white font-semibold mb-4`}>
                  {tier.name}
                </div>
                
                <div className="text-3xl font-bold text-gray-900 mb-6">{tier.amount}</div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                  Contact Us
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Have questions about how you can help? We'd love to hear from you and 
            help you find the perfect way to support girls' education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >
              Contact Us
            </a>
            <a
              href="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;