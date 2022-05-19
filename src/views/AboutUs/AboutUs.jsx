import React from "react";
import './AboutUs.css';
import AboutBanner from '../../components/AboutBanner/AboutBanner';
import Dropdown from '../../components/Dropdown/Dropdown';
import { aboutUs } from '../../data/aboutUs'

export default function AboutUs() {
  return (
    <main>
      <AboutBanner />

        {aboutUs.map((aboutData) => {
          return <Dropdown key={aboutData.id} id={aboutData.id} title={aboutData.title} content={aboutData.content} />
        })
        }
        
    </main>
  )
}

