'use client'

import { FaRegCircleCheck } from 'react-icons/fa6';
import styles from './mainService.module.css';
import data from '@/data/mainService';
import { useLanguage } from '@/context/languageContext';

const Content = () =>{
    const { language } = useLanguage();
    const { MAIN_SERVICES, MAIN_SERVICES_CH } = data;
    const items = language ==='en'? MAIN_SERVICES: MAIN_SERVICES_CH
    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title}>{language ==='en'? 'Main Services':"主要业务"}</div>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.service_container}>
                {items.map(service=>(
                    <div key={service} className={styles.service}>
                        <FaRegCircleCheck className={styles.qualifyicon}/>
                        <div>{service}</div>
                    </div>
                ))}

            </div>
        </>
    )
}


export default Content;