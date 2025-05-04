import { Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">ChatAssist AI</h3>
            <p className="text-sm">
              Your intelligent customer support assistant. Answering questions and suggesting the right products—instantly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Features</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} ChatAssist AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
