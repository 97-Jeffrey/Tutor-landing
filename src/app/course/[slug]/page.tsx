'use client'

import React from "react"
import styles from './detail.module.css'
import { useParams } from 'next/navigation';
import  data from '@/data/course'
import Image from "next/image";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/languageContext";
import RouteButton from "@/elements/button/routeButton";

export default function Page () {

    const params = useParams();
    const { language } = useLanguage();
    const router = useRouter()
    const { slug } = params;

    const course  = data.COURSES.find(course=> course.slug ===slug)
    const courseContent = language==='en'? course?.content || []: course?.content_ch ||[];
    const courseFormat = language ==='en'? course?.format || []: course?.format_ch||[];

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

                    <div className={styles.general_description}>
                    
                        <div> 
                            <span className={styles.course_type}>
                                {language ==='en'? course?.type: course?.type_ch}
                            </span> 
                            / 
                            {language ==='en'? course?.description: course?.description_ch}
                        </div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}> {language ==='en'?`Target Student`:`目标群体`} </div>
                        <div>{language ==='en'? course?.targetAudience: course?.targetAudience_ch}</div>
                    </div>



                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>{language ==='en'?`Course Content`:`课程内容` }</div>
                        <div className={styles.content_list}>
                            {courseContent.map(item=> (
                                <div className={styles.content_item} key={item}> • &nbsp;{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>{language ==='en'?`Course Format`:`课程模式`} </div>
                        <div className={styles.content_list}>
                            {courseFormat.map(item=> (
                                <div className={styles.content_item} key={item}> • &nbsp;{item}</div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.target_audience}>
                        <div className={styles.section_title}>{language ==='en'?`How long is it?`:`时长`} </div>
                        <div>{language ==='en'? course?.timing: course?.timing_ch}</div>
                    </div>

                </div>

            </div>
           
        </div>
    )
}