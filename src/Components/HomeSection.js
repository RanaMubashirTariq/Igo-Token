import React from 'react'
import './HomeSection.css';
import NavbarSection from './NavbarSection';
import MainSection from './MainSection';
import MainSection2 from './MainSection2';


export default function HomeSection() {
  return (
    <div className='main-container-back-pic'>
               <NavbarSection/>
               <MainSection/>
               <MainSection2/>
    </div>
  )
}
