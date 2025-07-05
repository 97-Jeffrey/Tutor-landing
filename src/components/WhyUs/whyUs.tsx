import React from 'react';
import styles from './whyUs.module.css';
import WhyUsContent from './whyUsContent';
import Image from 'next/image';
import LectureHall from '../../assets/whyUs.png'



const WhyUs = () => {


    return (
        <section id='team' className={styles.container}>
            <div className={styles.content}>
                
                <WhyUsContent />

                <Image
                    src={LectureHall}
                    alt='study'
                    className={styles.image}
                />
            </div>
    
        </section>
      )

    
}


export default WhyUs