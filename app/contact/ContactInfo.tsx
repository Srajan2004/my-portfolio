
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'srajan2004patel@gmail.com',
      href: 'mailto:srajan2004patel@gmail.com',
      description: 'Drop me a line anytime',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '+91 7828871559',
      href: 'tel:7828871559',
      description: 'Call for immediate assistance',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: 'ri-linkedin-fill',
      title: 'LinkedIn',
      value: 'srajan-patel-9b60a9250',
      href: 'https://linkedin.com/in/srajan-patel-9b60a9250',
      description: 'Professional networking',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Jabalpur, India',
      href: '#',
      description: 'Available for remote work',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Multiple Ways to <span className="text-blue-600">Connect</span>
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Choose your preferred method of communication. I'm available across all platforms 
          and typically respond within a few hours.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : '_self'}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group relative p-6 bg-white rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200 cursor-pointer"
          >
            <div className="flex items-start space-x-4">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${method.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${method.icon} text-2xl bg-gradient-to-r ${method.color} bg-clip-text text-transparent`}></i>
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-700 font-medium mb-2">{method.value}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-arrow-right-up-line text-xl text-gray-400"></i>
              </div>
            </div>
          </a>
        ))}
      </div>
      
      <div className="relative">
        <div 
          className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-3xl text-white relative overflow-hidden"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Abstract%20geometric%20patterns%20with%20flowing%20curves%2C%20digital%20mesh%20networks%2C%20and%20subtle%20glowing%20effects%20in%20blue%20and%20purple%20tones%20creating%20a%20modern%20tech-inspired%20background%20for%20professional%20contact%20sections&width=800&height=300&seq=contact-cta-bg&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-indigo-600/90"></div>
          
          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <i className="ri-rocket-line text-2xl text-white"></i>
            </div>
            
            <h3 className="text-3xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-blue-100 leading-relaxed mb-8 max-w-2xl mx-auto">
              I'm passionate about creating innovative solutions and would love to discuss how 
              we can work together to bring your ideas to life. Let's start the conversation!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:srajan2004patel@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                <i className="ri-mail-line text-lg mr-2"></i>
                Start a Project
              </a>
              <a 
                href="https://linkedin.com/in/srajan-patel-9b60a9250"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 whitespace-nowrap"
              >
                <i className="ri-linkedin-fill text-lg mr-2"></i>
                Professional Chat
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-2xl p-8">
        <div className="text-center">
          <i className="ri-time-line text-3xl text-blue-600 mb-4"></i>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Response Time</h3>
          <p className="text-gray-600 mb-6">
            I typically respond to emails within 2-4 hours during business hours and 
            within 24 hours on weekends. For urgent matters, feel free to call directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <i className="ri-mail-line text-2xl text-blue-600 mb-2"></i>
              <div className="text-sm font-semibold text-gray-900">Email</div>
              <div className="text-xs text-gray-500">2-4 hours</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <i className="ri-linkedin-fill text-2xl text-indigo-600 mb-2"></i>
              <div className="text-sm font-semibold text-gray-900">LinkedIn</div>
              <div className="text-xs text-gray-500">Same day</div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-gray-200">
              <i className="ri-phone-line text-2xl text-green-600 mb-2"></i>
              <div className="text-sm font-semibold text-gray-900">Phone</div>
              <div className="text-xs text-gray-500">Immediate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
