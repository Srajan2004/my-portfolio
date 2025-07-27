
'use client';

export default function PersonalitySection() {
  const traits = [
    {
      title: 'Passionate Developer',
      description: 'Genuinely excited about coding and building applications that make a difference',
      icon: 'ri-heart-line'
    },
    {
      title: 'Detail-Oriented',
      description: 'Meticulous attention to code quality, testing, and user experience',
      icon: 'ri-focus-2-line'
    },
    {
      title: 'Continuous Learner',
      description: 'Always exploring new technologies and improving existing skills',
      icon: 'ri-book-open-line'
    },
    {
      title: 'Problem Solver',
      description: 'Enjoys tackling complex challenges and finding elegant solutions',
      icon: 'ri-puzzle-line'
    },
    {
      title: 'Team Player',
      description: 'Collaborative approach to development and excellent communication skills',
      icon: 'ri-team-line'
    },
    {
      title: 'Quality Focused',
      description: 'Committed to writing clean, maintainable, and efficient code',
      icon: 'ri-award-line'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Me</h2>
          <p className="text-xl text-gray-600">
            The personal qualities and mindset I bring to software development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traits.map((trait, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${trait.icon} text-xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {trait.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {trait.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
