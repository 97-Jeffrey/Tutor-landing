

import React from "react"
import styles from './aboutUs.module.css'
import Image from "next/image"
import StudyImage from '@/assets/study.png'
import OfficeImage from '@/assets/office.png'
import OfficeImage2 from '@/assets/office2.png'
import OfficeImage3 from '@/assets/office3.png'

export default function Page () {
    return (

        <div className={styles.container}>

       
            <Image
                src={StudyImage} // Update with your image path
                alt="Background"

                quality={100}
                className={styles.image}
            />
        
            <div className={styles.main}>


                <div className={styles.title_container}>
                    <div className={styles.title}>About Us</div>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.section}>
                    <Image
                       src={OfficeImage}
                       alt={'office image'}
                       className={styles.section_image}
                    />
                    <div className={styles.description}>
                        we believe that education is not one-size-fits-all 
                        — every student deserves a learning experience 
                        that’s tailored to their unique strengths, 
                        challenges, and goals. Our passion for 
                        tutoring stems from a deep commitment to 
                        helping students reach their full potential. 
                        Whether they're striving to improve their grades, 
                        prepare for exams, or build confidence in a subject 
                        they once found intimidating, 
                        we’re here to guide them every step of the way.
                    </div>

                </div>


                <div className={styles.section_reverse}>
                    <div className={styles.description}>
                        We started this platform because we’ve seen 
                        firsthand how personalized, focused attention 
                        can transform a student’s academic journey. Unlike 
                        crowded classrooms or generic online videos, 
                        our tutoring sessions are designed to be interactive, 
                        adaptable, and engaging. We match students with 
                        knowledgeable, patient tutors who don’t just 
                        teach — they listen, encourage, and inspire.
                    </div>
                    <Image
                       src={OfficeImage2}
                       alt={'office image'}
                       className={styles.section_image}
                    />
                    

                </div>


                <div className={styles.section}>
                    <Image
                       src={OfficeImage3}
                       alt={'office image'}
                       className={styles.section_image}
                    />
                    <div className={styles.description}>
                        What sets us apart is our focus on quality, 
                        flexibility, and results. Our tutors 
                        are carefully selected not only for their academic 
                        expertise, but also for their communication 
                        skills and ability to connect with students. 
                        Sessions can be scheduled at times that 
                        work for busy families, and our online format 
                        ensures that students can learn from the 
                        comfort of their own homes — no commuting, 
                        no stress. Most importantly, we track progress 
                        closely and adjust our teaching methods to 
                        suit each learner’s pace and style.


                    </div>
                    
                    

                </div>
               
            </div>
        </div>
    )
}