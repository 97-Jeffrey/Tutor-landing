

import React from "react"
import styles from './aboutUs.module.css'
import Image from "next/image"
import StudyImage from '@/assets/study.png'

export default function Page () {
    return (

        <div className={styles.container}>

        <div className={styles.backgroundImage}>
            <Image
                src={StudyImage} // Update with your image path
                alt="Background"
                fill
                priority
                quality={100}
                className={styles.image}
            />
            {/* Overlay */}
        </div>
            <div className={styles.description}>
                Our tutoring service in Burnaby helps students atall grade 
                levelsprevent academic failure on a regular basis. Our
                qualified tutors work on misunderstood concepts individually with 
                students by providing them thebest learning tools for any subject 
                and effective study techniques applicable throughout their entire 
                academic journey! The role of a tutor is of course to help 
                students improve their grades, but also toincrease their 
                confidence and motivationat school.
            </div>
        </div>
    )
}