import React from 'react'
import PopupComponent from '../components/services/popUp';
import DevelopmentSection from '../components/services/development';
import FAQ from '../components/services/faq';
import FeatureSection from '../components/home/featureSection';
import HeroSections from '../components/aboutus/HeroSections';

const Services = () => {
  return (
    <div>
        <HeroSections />
 
  <div className='mx-12'> 

  <FeatureSection/>
  </div>
 <FAQ/>
 <DevelopmentSection/>
 <PopupComponent/>
 
 
    </div>
  )
}

export default Services;
