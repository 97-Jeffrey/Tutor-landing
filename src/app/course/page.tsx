'use client'

import React from "react"
import styles from './course.module.css'
import Image from "next/image"
import data from '@/data/course'
import Link from "next/link"
import { useLanguage } from "@/context/languageContext"


export default function Page () {
    const { COURSES } = data;
    const { language } = useLanguage()
    return (
        <div className={styles.container}>

            <div className={styles.main}>

                <div className={styles.title_container}>
                    <div className={styles.title}>{language ==='en'?`Our Courses`:`我们的课程`}</div>
                    <div className={styles.underline}></div>
                </div>


                <div className={styles.course_section}>

                    <div className={styles.course_container}>
                        {COURSES.map(course=> (
                            <Link 
                                href={`/course/${course.slug}`}
                                key={course.slug}
                            >
                                <div 

                                    className={styles.course_card}
                                >
                                    <Image 
                                        src={course.image}
                                        alt={course.name}
                                        className={styles.course_thnumbnail}
                                    />

                                    <div className={styles.course_info_container}>
                                        <div className={styles.course_name}>{language==='en'? course.name: course.name_ch}</div>
                                    </div>


                                </div>
                            </Link>
                        ))}

                    </div>
                </div>

            </div>

            {/* <Image
                src={courseImage} // Update with your image path
                alt="Background"

                quality={100}
                className={styles.image}
            /> */}

        </div>

    )
}
