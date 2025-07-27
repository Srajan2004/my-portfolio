
'use client';

export default function AboutHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Me</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Aspiring software developer with strong skills in C, C++, Java, and web technologies. 
              Passionate about building efficient, user-friendly applications, with hands-on experience in project development.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Detail-oriented and enthusiastic Computer Science graduate with solid understanding of 
              object-oriented programming and backend development. Always eager to learn new technologies 
              and take on challenging projects that push the boundaries of what's possible.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=Professional%20software%20developer%20working%20on%20computer%2C%20focused%20concentration%2C%20clean%20modern%20workspace%2C%20coding%20environment%2C%20multiple%20monitors%20with%20code%2C%20warm%20professional%20lighting%2C%20contemporary%20office%20setting%2C%20inspiring%20tech%20atmosphere&width=600&height=500&seq=about-image-1&orientation=landscape"
              alt="About Srajan Patel"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
