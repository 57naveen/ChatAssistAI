
import { ArrowRight, Sparkles } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { Badge } from '../ui/badge'
import DemoSection from './DemoSection'
import Howitworks from './HowItWork'
import CtaSection from './CtaSection'
import { useAuth, RedirectToSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

    // const { isSignedIn } = useAuth();
    const navigate = useNavigate();
    

    const handleClick = () => {
        // if (!isSignedIn) {
        //   navigate('/sign-in');
        // } else{
        //   navigate('/chat-bot')
        // }

        navigate('/chat-bot')
      };
    
    
  return (
    <div>
    <section className='relative mx-auto flex flex-col z-0 items-center justify-center py-16 sm:py-20 lg:pb-20 transition-all animate-in lg:px-12 max-w-7xl'>
       
            
                <div className='relative p-[2px] overflow-hidden rounded-full bg-linear-to-r from-blue-200 via-sky-500 to-indigo-800 animate-gradient-x group'>
                    <Badge
                    variant={'secondary'}
                    className='relative px-6 py-2 text-base font-medium bg-white rounded-full group-hover:bg-gray-50 transition-colors duration-200'
                    >
                      <div>

                   
                    <Sparkles className='h-6 w-6 mr-2 text-sky-600 animate-pulse'/>
                    </div>
                    <p className='text-base text-sky-600'>Powered by AI</p>
                    </Badge>
                </div>
               
           
            
            <h1 className='font-bold text-4xl py-6 text-center'>
             Smart support for smart products Let our
              <span className='relative inline-block'>
                <span className='relative z-10 px-2'> AI</span>
                <span className='absolute inset-0 bg-rose-200/50 -rotate-2 rounded-lg transform -skew-y-1'></span>
              </span>
              handle it!
                </h1>
            <h2 className='text-lg sm:text-xl lg:text-2xl text-center px-4 lg:px-0 lg:max-w-4xl text-gray-400'>Ask questions, get solutions, and discover helpful product suggestions through chat</h2>
            <div>
              <Button onClick={handleClick} variant={'link'}
              className='text-white mt-6 text-base sm:text-lg lg:text-xl
              rounded-full px=8 sm:px-10 lg:px-12 py-6 sm:py-7 lg:py-8
              lg:mt-16 bg-linear-to-r from-slate-900 to-sky-500
              hover:from-sky-500 hover:to-slate-900 hover:no-underline
              font-bold shadow-lg transition-all duration-300'
              >
                <Link  href="/#pricing" className='flex gap-2 items-center'>
                <span>Try SupportAI</span>
                <ArrowRight className='animate-pulse'/>
                </Link>
                </Button>
            </div>
           
           <DemoSection/>

           <Howitworks/>
           <CtaSection/>
       
    </section>
</div>
  )
}

export default HeroSection