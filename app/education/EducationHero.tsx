
'use client';

export default function EducationHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Education</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Currently pursuing B.Tech in Computer Science at Shree Ram Institute of Technology & Science, 
              building a strong foundation in software development and programming.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              My academic journey has provided me with comprehensive knowledge in computer science fundamentals, 
              programming languages, and software engineering principles.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Modern%20university%20campus%20building%2C%20beautiful%20architecture%2C%20students%20walking%2C%20academic%20environment%2C%20educational%20institution%2C%20contemporary%20college%20campus%2C%20inspiring%20learning%20atmosphere%2C%20blue%20sky%2C%20well-maintained%20grounds%2C%20professional%20educational%20setting&width=600&height=500&seq=education-hero-1&orientation=landscape"
              alt="Education"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
