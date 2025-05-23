'use client'

import styles from './banner.module.css'
import { ACHIEVEMENTS } from '@/data/banner'
import { useLanguage } from '@/context/languageContext'

const BannerList = () =>{
   
   const { language } = useLanguage()
   return (
    <div className={styles.card_container}>
        {
            ACHIEVEMENTS.map(achievement=>(
                <div 
                    className={styles.card}
                    key={achievement.id}
                >
                    <div className={styles.card_number}>{achievement.data}</div>
                    <div className={styles.underline}></div>
                    <div className={styles.note}>{language==='en'? achievement.detail: achievement.detail_ch}</div>
                </div>
            ))
        }
    </div>
   )
}


export default BannerList