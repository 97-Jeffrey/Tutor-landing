
import React from 'react';
import styles from './course.module.css';
import RouteButton from '@/elements/button/routeButton';
import CourseList from './CourseList';

const Course = () => {
    return (
        <section id='popular-course' className={styles.container}>
            <div className={styles.main_container}>
                

                <CourseList />

            </div>

        </section>
    )
}



export default Course