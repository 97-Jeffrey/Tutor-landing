'use client'

import styles from './aboutUs.module.css'
import data from '@/data/aboutUs'; 
import { useLanguage } from '@/context/languageContext';

const AboutUSContent = () =>{
    const { language } = useLanguage()
    return (
        <div className={styles.aboutUs}>
                <div className={styles.header}>
                    {language === 'en'? data.HOME_TITLE: data.HOME_TITLE_CH}
                </div>
                <div className={styles.underline}></div>
                <div className={styles.description}>
                    {language ==='en'? data.HOME_DESCRIPTIONS: data.HOME_DESCRIPTIONS_CH}
                </div>

            </div>
    )
}

export default AboutUSContent