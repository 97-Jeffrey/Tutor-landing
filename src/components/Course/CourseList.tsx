'use client'

import Link from 'next/link';
import styles from './course.module.css';
import data from '@/data/course';
import Image from 'next/image';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useLanguage } from '@/context/languageContext';
import RouteButton from '@/elements/button/routeButton';

const CourseList =() =>{
    const { COURSES } = data;
    const { language } = useLanguage()
    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header}>{ language ==='en'? `Popular Courses`:`热门课程`}</div>
                <RouteButton 
                    text={ language ==='en'? `More Courses`:`更多课程`}
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
                            <div className={styles.course_name}>{language ==='en'? course.name: course.name_ch}</div>
                            <div className={styles.course_type}>{language ==='en'? course.description: course.description_ch}</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                        src={course.instructor_image}
                                        alt='avatar'
                                        className={styles.avatar}
                                    />
                                    <div>By {language ==='en'?  course.instructor: course.instructor_ch}</div>
                                </div>
                                <button 
                                    className={styles.course_detail_button}>
                                    { language ==='en'? `Course Detail`: `课程详情`} 
                                    <MdKeyboardArrowRight />
                                </button>
                            </div>
                        </div>


                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default CourseList