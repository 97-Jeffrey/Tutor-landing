'use client'

import React from "react"
import styles from './detail.module.css'
import { useParams } from 'next/navigation';
import  data from '@/data/course'
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";


export default function Page () {

    const params = useParams();
    const router = useRouter()
    const { slug } = params;

    const course  = data.COURSES.find(course=> course.slug ===slug)

    return (
        <div className={styles.container}>

            <div className={styles.main}>

                <div className={styles.all_course_button_container}>
                    <button 
                        className={styles.all_course_button}
                        onClick={()=> router.push('/course')}
                    > 
                        <MdKeyboardArrowLeft/>  All Courses
                    </button>
                </div>

                <div className={styles.title_container}>
                    <div className={styles.title}>{course?.name}</div>
                    <div className={styles.underline}></div>
                </div>


                <div className={styles.content}>

                    {
                        course?.image 
                            &&
                        <Image 
                            src={course?.image}
                            alt={course?.name}
                            className={styles.image}
                        />
                    }

                    <div className={styles.general_description}>
                    
                        <div> <span className={styles.course_type}>{course?.type}</span> / {course?.description}</div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>Target Student </div>
                        <div>{course?.targetAudience}</div>
                    </div>



                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>Course Content </div>
                        <div className={styles.content_list}>
                            {course?.content.map(item=> (
                                <div className={styles.content_item} key={item}> • &nbsp;{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>Course Format </div>
                        <div className={styles.content_list}>
                            {course?.format.map(item=> (
                                <div className={styles.content_item} key={item}> • &nbsp;{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>How long is it? </div>
                        <div>{course?.timing}</div>
                    </div>

                </div>

            </div>
           
        </div>
    )
}