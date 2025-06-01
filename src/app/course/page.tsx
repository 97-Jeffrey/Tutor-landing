'use client'

import React from "react"
import styles from './course.module.css'
import Image from "next/image"
import courseImage from '@/assets/course.png'
import data from '@/data/course'
import { MdKeyboardArrowRight } from "react-icons/md"
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
                                    <div className={styles.course_type}>{language==='en'? course.description: course.description_ch}</div>
                                    <div className={styles.course_detail_container}>
                                        <div className={styles.course_avatars}>
                                            <Image 
                                                src={course.instructor_image}
                                                alt='avatar'
                                                className={styles.avatar}
                                            />
                                            <div>{language==='en'? `By ${course.instructor}`: `由 ${course.instructor_ch}老师主讲 `}</div>
                                        </div>
                                        <button className={styles.course_detail_button}>{language==='en'? `Course Detail`:`更多细节`} <MdKeyboardArrowRight /></button>
                                    </div>
                                </div>


                                </div>
                            </Link>
                        ))}

                    </div>
                </div>

            </div>

            <Image
                src={courseImage} // Update with your image path
                alt="Background"

                quality={100}
                className={styles.image}
            />

        </div>

    )
}
