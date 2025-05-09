import { cn } from '@/lib/utils'
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import { Brain, FileText } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {

  const location = useLocation();


  return (
    <>
  {/* Full-width nav, no padding/margin */}
  <nav className="w-full flex items-center justify-between ">

    {/* Left Logo */}
    <div className="flex items-center pl-0">
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-44 h-24 lg:w-44 lg:h-20 mx-3 object-contain"
        />
      </Link> 
    </div>

    {/* Center Content */}
   <div className="   px-64 py-2 flex justify-center items-center gap-6">
  <Link
    to="/instruction"
    className={cn(
      'text-[15px] px-6 py-1.5 rounded-full shadow-sm transition-all duration-200',
      location.pathname === '/Manuals'
        ? 'bg-sky-100 text-sky-700 shadow-md border-sky-300'
        : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600'
    )}
  >
    Manuals
  </Link>

  <Link
    to="/features"
    className={cn(
      'text-[15px] px-6 py-1.5 rounded-full shadow-sm transition-all duration-200',
      location.pathname === '/Tutorial'
        ? 'bg-sky-100 text-sky-700 shadow-md border-sky-300'
        : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600'
    )}
  >
    Tutorials
  </Link>

  <Link
    to="/about"
    className={cn(
      'text-[15px] px-6 py-1.5 rounded-full  shadow-sm transition-all duration-200',
      location.pathname === '/about'
        ? 'bg-sky-100 text-sky-700 shadow-md border-sky-300'
        : 'bg-white text-gray-600 hover:bg-sky-50 hover:text-sky-600'
    )}
  >
    About
  </Link>
  <SignedOut>
       <Link
  to="/sign-in"
  className="text-[15px] px-6 py-1.5 ml-28 text-nowrap  rounded-full text-gray-600 hover:text-white hover:bg-sky-500 hover:border-sky-500 shadow-sm transition-all duration-200"
>
  Sign In
</Link>
      </SignedOut>
</div>

    {/* Right Auth & Logo */}
    <div className="flex items-center  pr-0">
      <div className='mr-9'>

    
      <SignedIn>
        <UserButton />
      </SignedIn>
        </div>
      

      {/* Right Logo 2 */}
      <img
        src="/images/logo.png"
        alt="logo-2"
        className="w-40 h-20 lg:w-40 lg:h-20 mr-7 object-contain"
      />
    </div>
  </nav>
</>
  )
}

export default Header