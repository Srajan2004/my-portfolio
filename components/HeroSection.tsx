
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20software%20developer%20workspace%20with%20clean%20desk%20setup%2C%20multiple%20monitors%20displaying%20code%2C%20warm%20lighting%2C%20contemporary%20office%20environment%2C%20tech-focused%20atmosphere%2C%20minimalist%20design%2C%20blue%20and%20white%20color%20scheme%2C%20inspiring%20productivity%20setup&width=1920&height=1080&seq=hero-bg-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="text-blue-600">Srajan Patel</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-gray-700 font-medium">
              Aspiring Software Developer
            </h2>
            
            <div className="flex flex-wrap gap-3 text-lg text-gray-600">
              <span className="bg-blue-100 px-4 py-2 rounded-full">Java</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">Web Development</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">C/C++</span>
            </div>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate about building efficient, user-friendly applications with hands-on experience in project development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Get In Touch
              </Link>
              <Link 
                href="/about"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors cursor-pointer text-center whitespace-nowrap"
              >
                Learn More
              </Link>
            </div>
            
            <div className="flex space-x-6 pt-4">
              <a 
                href="mailto:srajan2004patel@gmail.com" 
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-mail-line text-xl"></i>
              </a>
              <a 
                href="https://linkedin.com/in/srajan-patel-9b60a9250" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill text-xl"></i>
              </a>
              <a 
                href="tel:7828871559" 
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer"
              >
                <i className="ri-phone-line text-xl"></i>
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20young%20software%20developer%20portrait%2C%20clean%20minimal%20background%2C%20confident%20expression%2C%20modern%20casual%20professional%20attire%2C%20tech-focused%20personality%2C%20approachable%20demeanor%2C%20clean%20lighting%2C%20contemporary%20style%2C%20inspiring%20professional%20image&width=600&height=800&seq=hero-portrait-1&orientation=portrait"
                alt="Srajan Patel"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
