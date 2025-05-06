import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Brain, FileText } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();


  return (
        <>
          <nav className='container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto'>
      <div className='flex lg:flex-1'>
      <Link to="/" className='flex items-center gap-1 lg:gap-2 shrink-0'>
       <Brain className='w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out   ' />
       <span className='font-extrabold lg:text-xl text-gray-900 transition-colors duration-200 hover:text-yellow-500'>Support AI</span> </Link>
      </div>

      <div className='flex lg:justify-center gap-4 lg:gap-12 lg:items-center'>
      <Link
        to="/features"
        className={cn(
          'transition-colors text-sm duration-200 text-gray-600 hover:text-yellow-500',
          location.pathname === '/features' && 'text-yellow-500'
        )}
      >
        Features
      </Link>
      <Link
        to="/about"
        className={cn(
          'transition-colors text-sm duration-200 text-gray-600 hover:text-yellow-500',
          location.pathname === '/about' && 'text-yellow-500'
        )}
      >
        About
      </Link>
        <SignedIn>
       
        </SignedIn>
   
      </div>

      <div className='flex lg:justify-end lg:flex-1'>

      <SignedIn>

     
        <div className='flex gap-2 items-center'>
            {/* <div>Pro</div> */}
            <SignedIn>
              <UserButton />
            </SignedIn>
       </div>
       </SignedIn>
        <SignedOut>
        <Link className='hover:text-yellow-500' to="/sign-in">Sign In</Link>
        </SignedOut>

        
    
      </div>
    </nav>
        </>
  )
}

export default Header