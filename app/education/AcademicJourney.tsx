
'use client';

export default function AcademicJourney() {
  const subjects = [
    {
      category: 'Programming & Development',
      courses: ['Object-Oriented Programming', 'Data Structures & Algorithms', 'Software Engineering', 'Web Development'],
      icon: 'ri-code-s-slash-line'
    },
    {
      category: 'Computer Science Fundamentals',
      courses: ['Computer Networks', 'Database Management Systems', 'Operating Systems', 'System Design'],
      icon: 'ri-computer-line'
    },
    {
      category: 'Mathematics & Logic',
      courses: ['Discrete Mathematics', 'Statistics', 'Mathematical Foundations', 'Computational Logic'],
      icon: 'ri-calculator-line'
    },
    {
      category: 'Practical Applications',
      courses: ['Project Development', 'Software Testing', 'Version Control', 'Team Collaboration'],
      icon: 'ri-tools-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Focus Areas</h2>
          <p className="text-xl text-gray-600">
            Key subjects and areas of study that have shaped my technical foundation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${subject.icon} text-xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {subject.category}
              </h3>
              <ul className="space-y-2">
                {subject.courses.map((course, courseIndex) => (
                  <li key={courseIndex} className="text-gray-600 flex items-center">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-blue-600 mr-2"></i>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Academic Goals</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Currently working towards graduation while continuously improving my CGPA and gaining practical experience 
              through projects and internships. My goal is to bridge the gap between theoretical knowledge and 
              real-world application, preparing myself for a successful career in software development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
