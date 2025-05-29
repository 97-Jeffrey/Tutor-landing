

import React from "react"
import styles from './aboutUs.module.css'
import Image from "next/image"
import StudyImage from '@/assets/study.png'
import Content from "./content"

export default function Page () {
    return (

        <div className={styles.container}>

            <Content />

            <Image
                src={StudyImage} // Update with your image path
                alt="Background"

                quality={100}
                className={styles.image}
            />
        </div>
    )
}