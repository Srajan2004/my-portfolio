
'use client';

export default function SkillsSection() {
  const skills = [
    {
      category: 'Programming Languages',
      items: ['C', 'C++', 'Java'],
      icon: 'ri-code-s-slash-line'
    },
    {
      category: 'Web Technologies',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js'],
      icon: 'ri-global-line'
    },
    {
      category: 'Development Focus',
      items: ['Object-Oriented Programming', 'Backend Development', 'User-Friendly Applications'],
      icon: 'ri-settings-3-line'
    },
    {
      category: 'Core Strengths',
      items: ['Problem Solving', 'Detail-Oriented', 'Project Development', 'Team Collaboration'],
      icon: 'ri-lightbulb-line'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Skills</h2>
          <p className="text-xl text-gray-600">
            Technical expertise and core competencies I bring to every project
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className={`${skill.icon} text-xl text-blue-600`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-center">
                    <i className="ri-check-line w-4 h-4 flex items-center justify-center text-blue-600 mr-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
