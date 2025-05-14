import React from 'react';
import styles from './course.module.css';
import Image from 'next/image';
import AP_ECON from '@/assets/ap_econ.png'
import AP_CALCULUS from '@/assets/ap_calculus.png'
import AP_CHEMISTRY from '@/assets/ap_chemistry.png'
import AP_PHYSICS from '@/assets/ap_physics.png'
import AVATAR from '@/assets/avatar.png'
import { MdKeyboardArrowRight } from "react-icons/md";


const Course = () => {
    return (
        <section id='popular-course' className={styles.container}>
            <div className={styles.main_container}>
                <div className={styles.header_container}>
                    <div className={styles.header}>Popular Courses</div>
                    <button className={styles.course_button}>More Courses</button>
                </div>

                <div className={styles.course_container}>
                    <div className={styles.course_card}>
                        <Image 
                           src={AP_ECON}
                           alt='ap_econ'
                           className={styles.course_thnumbnail}
                           
                        />
                        <div className={styles.course_info_container}>
                            <div className={styles.course_name}>AP Economics</div>
                            <div className={styles.course_type}>AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                       src={AVATAR}
                                       alt='avatar'
                                       className={styles.avatar}
                                    />
                                    <div>By Mr.Chen</div>
                                </div>
                                <button className={styles.course_detail_button}>Course Detail <MdKeyboardArrowRight /></button>
                            </div>
                        </div>

                        
                    </div>
                    <div className={styles.course_card}>
                        <Image 
                           src={AP_CALCULUS}
                           alt='ap_econ'
                           className={styles.course_thnumbnail}
                           
                        />
                         <div className={styles.course_info_container}>
                            <div className={styles.course_name}>AP Calculus</div>
                            <div className={styles.course_type}>AP courses/课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                       src={AVATAR}
                                       alt='avatar'
                                       className={styles.avatar}
                                    />
                                    <div>By Mr.Chen</div>
                                </div>
                                <button className={styles.course_detail_button}>Course Detail <MdKeyboardArrowRight /></button>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.course_card}>
                        <Image 
                           src={AP_CHEMISTRY}
                           alt='ap_econ'
                           className={styles.course_thnumbnail}
                           
                        />
                         <div className={styles.course_info_container}>
                            <div className={styles.course_name}>AP Chemistry</div>
                            <div className={styles.course_type}>AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                       src={AVATAR}
                                       alt='avatar'
                                       className={styles.avatar}
                                    />
                                    <div>By Mr.Chen</div>
                                </div>
                                <button className={styles.course_detail_button}>Course Detail <MdKeyboardArrowRight /></button>
                            </div>
                        </div>
                        
                    </div>
                    <div className={styles.course_card}>
                        <Image 
                           src={AP_PHYSICS}
                           alt='ap_econ'
                           className={styles.course_thnumbnail}
                           
                        />
                         <div className={styles.course_info_container}>
                            <div className={styles.course_name}>AP Physics</div>
                            <div className={styles.course_type}>AP courses/ 课程专为 G5 - G7 学生打造，物理、化学、生物三科任选，灵活又贴心</div>
                            <div className={styles.course_detail_container}>
                                <div className={styles.course_avatars}>
                                    <Image 
                                       src={AVATAR}
                                       alt='avatar'
                                       className={styles.avatar}
                                    />
                                    <div>By Mr.Chen</div>
                                </div>
                                <button className={styles.course_detail_button}>Course Detail <MdKeyboardArrowRight /></button>
                            </div>
                        </div>
                        
                    </div>

                </div>

            </div>

        </section>
    )
}



export default Course