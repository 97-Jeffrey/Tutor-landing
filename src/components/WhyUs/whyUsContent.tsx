'use client'

import styles from './whyUs.module.css'
import data from '@/data/whyUs'; 
import { useLanguage } from '@/context/languageContext';


const WhyUsContent = () =>{
    const { language } = useLanguage()
    const dataToDisplay: string[] = language === 'en'? data.POINTS : data.POINTS_ch;
    return (
        <>
            <div className={styles.whyUs}>
                
                <div className={styles.header_container}>
                    <div className={styles.header}>
                        {language ==='en'? data.TITLE: data.TITLE_CN}
                    </div>             
                    <div className={styles.underline}></div>  
                </div>
                
                <div className={styles.list}>
                    {
                        dataToDisplay.map(point=> (
                            <div key={point} className={styles.list_item}>{point}</div>
                        ))
                    }
                </div>
            </div>
        </>
   )
}

export default WhyUsContent