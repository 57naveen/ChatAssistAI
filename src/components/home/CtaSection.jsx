import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';


const CtaSection = () => {

    // const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    

    const handleClick = () => {
        // if (!isSignedIn) {
        //   navigate('/sign-in');
        // } 
        // else{
        //   navigate('/chat-bot')
        // }

        navigate('/chat-bot')
      };
    


    return (
        <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-36 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
              Ready to Elevate Your Customer Support?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Provide instant, intelligent responses with our AI-powered chatbot — <br className="hidden sm:inline" />
              assist customers and suggest relevant products in real time.
            </p>
            <div className="inline-flex ">
              {/* <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-lg transition"
              >
                Try the Chatbot
                <ArrowRight size={18} />
              </a> */}

              <Button onClick={handleClick} variant={'link'}
              className='text-white mt-6 text-base sm:text-lg lg:text-xl
              rounded-full px=8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8
              lg:mt-16 bg-linear-to-r from-slate-900 to-yellow-500
              hover:from-yellow-500 hover:to-slate-900 hover:no-underline
              font-bold shadow-lg transition-all duration-300'
              >
                <Link  href="/#pricing" className='flex gap-2 items-center'>
                <span>Try the Chatbot</span>
                <ArrowRight className='animate-pulse'/>
                </Link>
                </Button>
            </div>
          </div>
        </section>
      )
}

export default CtaSection