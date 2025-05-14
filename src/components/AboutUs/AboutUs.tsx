import React from 'react';
import styles from './aboutUs.module.css';
import Image from 'next/image';
import StudyImage from '../../assets/study.png'
import { FaRegCircleCheck } from "react-icons/fa6";

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
                <div className={styles.header}>About Our Tutoring Service  </div>
                <div className={styles.description}>
                    Our tutoring service in Burnaby helps students at all 
                    grade levels prevent academic failure on a regular basis. 
                    Our qualified tutors work on misunderstood concepts 
                    individually with students by providing them the best 
                    learning tools for any subject and effective study 
                    techniques applicable throughout their entire academic 
                    journey! The role of a tutor is of course to help 
                    students improve their grades, but also to increase
                     their confidence and motivation at school. 
                </div>
                <button className={styles.learnmorebutton}>Learn More</button>
                

            </div>

        </div>

  


     


    </section>
  )
}

export default AboutUs