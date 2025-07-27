
'use client';

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: 'ri-mail-line',
      title: 'Email',
      value: 'srajan2004patel@gmail.com',
      href: 'mailto:srajan2004patel@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: 'ri-phone-line',
      title: 'Phone',
      value: '7828871559',
      href: 'tel:7828871559',
      description: 'Call me during business hours'
    },
    {
      icon: 'ri-linkedin-fill',
      title: 'LinkedIn',
      value: 'linkedin.com/in/srajan-patel-9b60a9250',
      href: 'https://linkedin.com/in/srajan-patel-9b60a9250',
      description: 'Connect with me professionally'
    },
    {
      icon: 'ri-map-pin-line',
      title: 'Location',
      value: 'Jabalpur, India',
      href: '#',
      description: 'Based in Jabalpur, India'
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Feel free to reach out through any of these channels. I typically respond within 24 hours.
        </p>
      </div>
      
      <div className="space-y-6">
        {contactMethods.map((method, index) => (
          <a
            key={index}
            href={method.href}
            target={method.href.startsWith('http') ? '_blank' : '_self'}
            rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <i className={`${method.icon} text-xl text-blue-600`}></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
              <p className="text-blue-600 font-medium">{method.value}</p>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          </a>
        ))}
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Let's Connect!</h3>
        <p className="text-gray-600 leading-relaxed mb-4">
          I'm always interested in discussing new opportunities, collaborating on projects, 
          or sharing knowledge about software development and technology.
        </p>
        <div className="flex space-x-4">
          <a 
            href="mailto:srajan2004patel@gmail.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer whitespace-nowrap"
          >
            Email Me
          </a>
          <a 
            href="https://linkedin.com/in/srajan-patel-9b60a9250"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
