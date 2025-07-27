
'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Srajan Patel</h3>
            <p className="text-gray-400">
              Aspiring Software Developer passionate about building efficient, user-friendly applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-white cursor-pointer">Home</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">About</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Education</div>
              <div className="text-gray-400 hover:text-white cursor-pointer">Contact</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <i className="ri-mail-line w-5 h-5 flex items-center justify-center mr-3"></i>
                srajan2004patel@gmail.com
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-phone-line w-5 h-5 flex items-center justify-center mr-3"></i>
                7828871559
              </div>
              <div className="flex items-center text-gray-400">
                <i className="ri-map-pin-line w-5 h-5 flex items-center justify-center mr-3"></i>
                Jabalpur, India
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Srajan Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
