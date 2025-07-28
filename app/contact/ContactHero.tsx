
'use client';

export default function ContactHero() {
  return (
    <section 
      className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20futuristic%20digital%20technology%20background%20with%20geometric%20patterns%2C%20circuit%20board%20designs%2C%20and%20glowing%20blue%20neon%20lights%20creating%20a%20professional%20tech%20atmosphere%20with%20dark%20blue%20and%20black%20gradient%20colors%2C%20abstract%20digital%20workspace%20environment&width=1400&height=600&seq=contact-hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/20 rounded-full mb-8 backdrop-blur-sm border border-blue-400/30">
            <i className="ri-mail-send-line text-3xl text-blue-400"></i>
          </div>
          
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Let's Start a
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Conversation
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-8">
            Ready to discuss your next project? I'm here to help bring your ideas to life 
            with innovative software solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:srajan2004patel@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap"
            >
              <i className="ri-mail-line text-lg mr-2"></i>
              Send Email
            </a>
            <a 
              href="https://linkedin.com/in/srajan-patel-9b60a9250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/30 whitespace-nowrap"
            >
              <i className="ri-linkedin-fill text-lg mr-2"></i>
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
