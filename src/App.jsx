import { Routes, Route } from 'react-router-dom'

import Header from './components/common/Header'
import SignInPage from './components/common/SignInPage'
import SignUpPage from './components/common/SignUpPage'
import BgGradient from './components/common/BgGradient'
import HeroSection from './components/home/HeroSection'
import Footer from './components/common/Footer'
import ProtectedRoute from './components/common/ProtectedRoute'
import ChatBot from './components/Chatbot/Chatbot'


// import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BgGradient />
      <div className="flex flex-col relative z-10">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          {/* <Route path="/chat-bot" element={<ProtectedRoute><ChatBot/></ProtectedRoute>} /> */}
          <Route path="/chat-bot" element={<ChatBot/>} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App
