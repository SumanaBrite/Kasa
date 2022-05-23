import React from "react";
import './HomeBanner.css';
import HomeBannerImage from '../../assets/banner.png'

export default function HomeBanner(){
 
    return (
        <section className='homeBanner__container'>
            <img src={HomeBannerImage} alt='HomeBannerImage' className='homeBanner__img'></img>
            <div className='homeBanner__bg'></div>
            <p className="homeBanner__title">Chez vous, partout et ailleur</p>
        </section>
    );
}

