
import React from "react"
import styles from './course.module.css'
import Image from "next/image"
import courseImage from '@/assets/course.png'
import data from '@/data/course'
import { MdKeyboardArrowRight } from "react-icons/md"


export default function Page () {
    const { COURSES } = data;
    return (
        <div className={styles.container}>
            <Image
                src={courseImage} // Update with your image path
                alt="Background"

                quality={100}
                className={styles.image}
            />


            <div className={styles.main}>

                <div className={styles.title_container}>
                    <div className={styles.title}>Our Courses</div>
                    <div className={styles.underline}></div>
                </div>


                <div className={styles.course_section}>

                    <div className={styles.course_container}>
                        {COURSES.map(course=> (
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

            </div>

        </div>

    )
}
