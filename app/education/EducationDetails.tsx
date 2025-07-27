
'use client';

export default function EducationDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Background</h2>
          <p className="text-xl text-gray-600">
            My educational journey and achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-graduation-cap-line text-2xl text-blue-600"></i>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-4">
                  Shree Ram Institute of Technology & Science
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className="ri-calendar-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      <span className="text-sm font-medium text-gray-500">Duration</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Nov 2021 – Present</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className="ri-award-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      <span className="text-sm font-medium text-gray-500">CGPA</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">6.49</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center mb-2">
                      <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center text-blue-600 mr-2"></i>
                      <span className="text-sm font-medium text-gray-500">Location</span>
                    </div>
                    <p className="text-lg font-semibold text-gray-900">Jabalpur</p>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  Pursuing comprehensive education in Computer Science with focus on software development, 
                  programming languages, data structures, algorithms, and software engineering principles. 
                  Gaining practical experience through various projects and coursework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
