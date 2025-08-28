import React, { useState } from 'react';
import { Calendar, User, Tag, ChevronRight, Search } from 'lucide-react';

const News = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Articles', count: 15 },
    { id: 'success-stories', name: 'Success Stories', count: 6 },
    { id: 'program-updates', name: 'Program Updates', count: 4 },
    { id: 'advocacy', name: 'Advocacy', count: 3 },
    { id: 'events', name: 'Events', count: 2 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Amina\'s Journey: From Dropping Out to University Admission',
      excerpt: 'Meet Amina Sani, a 17-year-old who overcame numerous obstacles to secure admission into the University of Abuja. Her story is one of resilience, community support, and the transformative power of education.',
      image: 'https://images.pexels.com/photos/8923742/pexels-photo-8923742.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'success-stories',
      author: 'Khadijah Usman',
      date: '2024-02-15',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      title: 'GCEWATCH Partners with 15 New Schools Across Northern Nigeria',
      excerpt: 'We are excited to announce our expansion into 15 new schools across Kano, Kaduna, and Sokoto states, bringing our total partnership to 45 institutions committed to girls\' education.',
      image: 'https://images.pexels.com/photos/8923775/pexels-photo-8923775.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'program-updates',
      author: 'Dr. Aisha Mohammed',
      date: '2024-02-10',
      readTime: '3 min read',
      featured: false
    },
    {
      id: 3,
      title: 'Digital Skills Training Program Graduates First Cohort',
      excerpt: 'Celebrating 50 young women who completed our 6-month digital literacy program, gaining skills in coding, digital marketing, and entrepreneurship.',
      image: 'https://images.pexels.com/photos/8923865/pexels-photo-8923865.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'program-updates',
      author: 'Hauwa Garba',
      date: '2024-02-05',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 4,
      title: 'Breaking Barriers: Traditional Leaders Champion Girls\' Education',
      excerpt: 'How our community advocacy program is changing mindsets among traditional and religious leaders in rural communities, creating lasting change for girls\' education.',
      image: 'https://images.pexels.com/photos/8923844/pexels-photo-8923844.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'advocacy',
      author: 'Fatima Ahmed',
      date: '2024-01-28',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Annual Girls in STEM Workshop Attracts 200+ Participants',
      excerpt: 'Our largest STEM workshop yet brought together girls from across Nigeria for hands-on learning in science, technology, engineering, and mathematics.',
      image: 'https://images.pexels.com/photos/8923889/pexels-photo-8923889.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'events',
      author: 'Zainab Ibrahim',
      date: '2024-01-20',
      readTime: '4 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Policy Advocacy: Pushing for Free Education at Federal Level',
      excerpt: 'GCEWATCH joins coalition of NGOs to advocate for comprehensive free education policy that prioritizes girls\' access to quality schooling.',
      image: 'https://images.pexels.com/photos/8923795/pexels-photo-8923795.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'advocacy',
      author: 'Dr. Aisha Mohammed',
      date: '2024-01-15',
      readTime: '7 min read',
      featured: false
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'success-stories': 'bg-green-100 text-green-800',
      'program-updates': 'bg-blue-100 text-blue-800',
      'advocacy': 'bg-purple-100 text-purple-800',
      'events': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getCategoryName = (category: string) => {
    const names = {
      'success-stories': 'Success Stories',
      'program-updates': 'Program Updates',
      'advocacy': 'Advocacy',
      'events': 'Events'
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl text-green-100">
              Stay informed about our latest programs, success stories, and advocacy efforts 
              for girls' education across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Story</h2>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="h-64 lg:h-full">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(featuredArticle.category)}`}>
                      {getCategoryName(featuredArticle.category)}
                    </span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-2" />
                      <span className="mr-4">{featuredArticle.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{formatDate(featuredArticle.date)}</span>
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <button className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200 flex items-center">
                      Read More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'all' ? 'Latest Articles' : getCategoryName(selectedCategory)}
            </h2>
            <span className="text-gray-500">
              {filteredArticles.length} articles found
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Tag className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <article key={article.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span className="mr-3">{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span className="mr-3">{formatDate(article.date)}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for the latest updates on girls' education initiatives, 
            success stories, and ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Story
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Every girl's success story starts with someone who believed in her potential. 
            Your support can be the beginning of the next inspiring journey.
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
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Our Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;