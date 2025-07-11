'use client'

import styles from './whyUs.module.css'
import { useLanguage } from '@/context/languageContext';
import data from '@/data/whyUs'; 


const WhyUsContent = () =>{
    const { language } = useLanguage()
    return (
        <>
            <div className={styles.whyUs}>
                
                <div className={styles.header_container}>
                    <div className={styles.header}>
                        { data.TITLE}
                    </div>             
                    <div className={styles.underline}></div>  
                </div>
                
                <div className={styles.list}>
                    {
                        data.POINTS.map(point=> (
                            <div key={point} className={styles.list_item}>{point}</div>
                        ))
                    }
                </div>
            </div>
        </>
   )
}

export default WhyUsContent