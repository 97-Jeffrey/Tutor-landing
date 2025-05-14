import React from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import HomeImage from '../../assets/home.png'
import { FaRegCircleCheck } from "react-icons/fa6";

const Hero = () => {
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
        <h1 className={styles.title}>YOUR TRUSTED TUTORING</h1>
        <p className={styles.subtitle}>Onsite & Online Tutoring Service</p>
        <div className={styles.qualifylist}>
            <div className={styles.qualifyitem}><FaRegCircleCheck className={styles.qualifyicon}/> Available in Canada </div>
            <div className={styles.qualifyitem}><FaRegCircleCheck className={styles.qualifyicon}/> No Contract Needed </div>
            <div className={styles.qualifyitem}><FaRegCircleCheck className={styles.qualifyicon}/> Numerous courses to begin</div>
        </div>
        
      </div>

      
    </section>
  );
};

export default Hero;