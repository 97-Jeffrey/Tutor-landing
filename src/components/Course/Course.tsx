'use client'

import React from 'react';
import styles from './course.module.css';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import data from '@/data/course';
import { useRouter } from 'next/navigation';


const Course = () => {
    const { COURSES } = data;
    const router = useRouter()
    return (
        <section id='popular-course' className={styles.container}>
            <div className={styles.main_container}>
                <div className={styles.header_container}>
                    <div className={styles.header}>Popular Courses</div>
                    <button 
                        className={styles.course_button}
                        onClick={()=> router.push('/course')}
                    >
                        More Courses
                    </button>
                </div>

                <div className={styles.course_container}>
                    {COURSES.slice(0,3).map(course=> (
                        <div 
                            key={course.slug}
                            className={styles.course_card}
                        >
                             <Image 
                                src={course.image}
                                alt={course.name}
                                className={styles.course_thnumbnail}
                            />

                            <div className={styles.course_info_container}>
                            <div className={styles.course_name}>{course.name}</div>
                            <div className={styles.course_type}>{course.description}</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                       src={course.instructor_image}
                                       alt='avatar'
                                       className={styles.avatar}
                                    />
                                    <div>By {course.instructor}</div>
                                </div>
                                <button className={styles.course_detail_button}>Course Detail <MdKeyboardArrowRight /></button>
                            </div>
                        </div>


                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}



export default Course