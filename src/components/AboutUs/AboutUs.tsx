import React from 'react';
import styles from './aboutUs.module.css';
import Image from 'next/image';
import StudyImage from '../../assets/study.png'

import data from '@/data/aboutUs';
import AboutUSContent from './AboutUsContent';

const AboutUs = () => {
  return (
    <section id='about-us' className={styles.container}>

        <div className={styles.content}>
            <Image 
               src={StudyImage}
               alt='study'
               className={styles.image}
            />

            <AboutUSContent />

        
        </div>

  




    </section>
  )
}

export default AboutUs