import React from 'react'
import HeroSection from '../Components/HeroSection.jsx'
import GemstoneGrid from '../components/GemstoneGrid.jsx'
import RareGemstoneSection from '../components/RareGemstoneSection.jsx'
import Chat from '../components/Chat.jsx'

import MakingProcess from '../components/MakingProcess.jsx'
import Review from '../components/Review.jsx'
// import GemstoneSliderPage from '../components/GemstoneSliderPage.jsx'
// import Testnomial from '../components/Testnomial.jsx' 
import GemstoneCertificate from '../components/GemstoneCertificate.jsx'
import FAQSection from '../components/FAQSection.jsx'
import GemstoneFeatures from '../components/GemstoneFeatures.jsx'
import VideoTestimonial from '../components/VideoTestimonial.jsx'


export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <GemstoneGrid/>
      <RareGemstoneSection/> 
      <MakingProcess/>
      <Review/>
      <VideoTestimonial/>
      <GemstoneCertificate/>
      <Chat/>
      <FAQSection/>
      <GemstoneFeatures/>
      {/* <GemstoneSliderPage/> */}

    </div>
  )
}
