
import React from 'react';
import styles from './course.module.css';
import Image from 'next/image';
import { MdKeyboardArrowRight } from "react-icons/md";
import data from '@/data/course';
import Link from 'next/link';
import RouteButton from '@/elements/button/routeButton';


const Course = () => {
    const { COURSES } = data;
    return (
        <section id='popular-course' className={styles.container}>
            <div className={styles.main_container}>
                <div className={styles.header_container}>
                    <div className={styles.header}>Popular Courses</div>
                    <RouteButton 
                       text='More Courses'
                       url='/course'
                       back={false}
                    />
                </div>

                <div className={styles.course_container}>
                    {COURSES.slice(0,3).map(course=> (
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
                        </Link>
                    ))}

                </div>

            </div>

        </section>
    )
}



export default Course