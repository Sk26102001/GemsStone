import React from 'react'
import HeroSection from '../components/HeroSection.jsx'
import GemstoneGrid from '../components/GemstoneGrid.jsx'
import RareGemstoneSection from '../components/RareGemstoneSection.jsx'

import MakingProcess from '../components/MakingProcess.jsx'
import Testnomial from '../components/Testnomial.jsx' 
import GemstoneCertificate from '../components/GemstoneCertificate.jsx'
import FAQSection from '../components/FAQSection.jsx'
import GemstoneFeatures from '../components/GemstoneFeatures.jsx'


export default function LandingPage() {
  return (
    <div>
      <HeroSection />
      <GemstoneGrid/>
      <RareGemstoneSection/> 
      <MakingProcess/>
      <Testnomial/>
      <GemstoneCertificate/>
      <FAQSection/>
      <GemstoneFeatures/>
     
       

   
    </div>
  )
}
