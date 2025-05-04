import React from 'react'
import { ArrowRight } from 'lucide-react'

const CtaSection = () => {
    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ready to Elevate Your Customer Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Provide instant, intelligent responses with our AI-powered chatbot — <br className="hidden sm:inline" />
              assist customers and suggest relevant products in real time.
            </p>
            <div className="inline-flex rounded-lg shadow-sm">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-lg transition"
              >
                Try the Chatbot
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
      )
}

export default CtaSection