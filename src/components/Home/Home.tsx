'use client'

import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import HomeImage from '../../assets/home.png'
import { FaRegCircleCheck } from "react-icons/fa6";
import { HEADER, HEADER_CH, SUB_HEADER, SUB_HEADER_CH, ATTRACTIONS } from '@/data/home';
import { useLanguage } from '@/context/languageContext';

const Hero = () => {
  const {  language } = useLanguage()
  return (
    <section className={styles.hero} id='home'>
      {/* Background Image */}

      <div className={styles.backgroundImage}>
        <Image
          src={HomeImage} // Update with your image path
          alt="Background"
          fill
          priority
          quality={100}
          className={styles.image}
        />
        {/* Overlay */}
        <div className={styles.overlay}></div>
      </div>


      <div className={styles.content}>
        <h1 className={styles.title}>{language ==='en'? HEADER: HEADER_CH}</h1>
        <p className={styles.subtitle}>{language ==='en'? SUB_HEADER: SUB_HEADER_CH}</p>
        <div className={styles.qualifylist}>
            {ATTRACTIONS.map(item=>(
                <div 
                  className={styles.qualifyitem}
                  key={item[0]}
                >
                  <FaRegCircleCheck className={styles.qualifyicon}/>
                  {language==='en'? item[0]: item[1]} 
                </div>
            ))}
        </div>
        
      </div>

      
    </section>
  );
};

export default Hero;