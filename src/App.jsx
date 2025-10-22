import React from 'react'
import HeroSection from './Components/HeroSection.jsx'
import GemstoneGrid from './Components/GemstoneGrid.jsx'
import RareGemstoneSection from './Components/RareGemstoneSection.jsx'
import GemstoneCategories from './Components/GemCategories.jsx'
import VedicProcessSection from './Components/VedicProcessSection.jsx'
import MakingProcess from './Components/MakingProcess.jsx'
import Testnomial from './Components/Testnomial.jsx' 
import GemstoneCertificate from './Components/GemstoneCertificate.jsx'
import FAQSection from './Components/FAQSection.jsx'
import GemstoneFeatures from './Components/GemstoneFeatures.jsx'

export default function App() {
  return (
    <div>
      <HeroSection />
      <GemstoneGrid/>
      <RareGemstoneSection/> 
       {/* <GemstoneCategories/> 
       <VedicProcessSection/> */}
      <Testnomial/> 
       <MakingProcess/>
       <Testnomial/>
       <GemstoneCertificate/>
       <GemstoneFeatures/>
       <FAQSection/>
       

   
    </div>
  )
}
