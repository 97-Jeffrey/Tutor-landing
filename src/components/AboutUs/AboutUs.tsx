import React from 'react';
import styles from './aboutUs.module.css';
import Image from 'next/image';
import StudyImage from '../../assets/study.png'

import data from '@/data/aboutUs';

const AboutUs = () => {
  return (
    <section id='about-us' className={styles.container}>

        <div className={styles.content}>
            <Image 
               src={StudyImage}
               alt='study'
               className={styles.image}
            />

            <div className={styles.aboutUs}>
                <div className={styles.header}>
                    {data.HOME_TITLE}
                </div>
                <div className={styles.underline}></div>
                <div className={styles.description}>
                    {data.HOME_DESCRIPTIONS}
                </div>
                {/* <button className={styles.learnmorebutton}>Learn More</button> */}


            </div>

        </div>

  


     


    </section>
  )
}

export default AboutUs