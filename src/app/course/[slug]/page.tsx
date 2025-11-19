'use client'

import React from "react"
import styles from './detail.module.css'
import { useParams } from 'next/navigation';
import  data from '@/data/course'
import Image from "next/image";
import { useLanguage } from "@/context/languageContext";
import RouteButton from "@/elements/button/routeButton";

export default function Page () {

    const params = useParams();
    const { language } = useLanguage();
    const { slug } = params;

    const course  = data.COURSES.find(course=> course.slug ===slug)
    const content = language==='en'? course?.content || []: course?.content_ch ||[];
    const courseFormat = language ==='en'? course?.format : course?.format_ch

    return (
        <div className={styles.container}>

            <div className={styles.main}>

                <div className={styles.all_course_button_container}>
                    <RouteButton 
                        text={language==='en'? `Course`:`所有课程`}
                        url='/course'
                        back={true}
                    />
                </div>

                <div className={styles.title_container}>
                    <div className={styles.title}>{language ==='en'? course?.name: course?.name_ch}</div>
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
                    {slug === 'high-school'?
                    <div className={styles.high_school_container}>
                        <div className={styles.section_title}>{language ==='en' ? 'Available Courses':'课程范围'}</div>
                        <div className={styles.high_school_text}>{language ==='en' ? 'All High School Courses':"所有高中课程"}</div>
                    </div>
                        :
                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>{language ==='en'?`Avalable Courses`:`所有课程`} </div>
                        <div className={styles.content_list}>
                            {content.map((item: string)=> (
                                <div 
                                    className={styles.content_item_section} key={item}
                                > 
                                    <div className={styles.course_item_title}>{item}</div>
                                    <div className={styles.course_item_list}>
                                        {
                                            courseFormat?.[item].map((each: string, index: number)=>
                                                <div key={index} className={styles.course_item}>{each}</div>
                                            )
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    }

                </div>

            </div>
           
        </div>
    )
}