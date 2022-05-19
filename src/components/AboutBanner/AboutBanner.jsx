import React from "react";
import './AboutBanner.css';
import AboutBannerImage from '../../assets/bannerAboutUs.png'

export default function AboutBanner(){

    return (
        <section className='aboutUsBanner__container'>
            <img src={AboutBannerImage} alt='AboutUsBannerImage' className='aboutUsBanner__img'></img>
            <div className='aboutUsBanner__bg'></div>
        </section>
        
    );
}

