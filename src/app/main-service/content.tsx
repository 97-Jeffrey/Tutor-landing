'use client'

import { FaRegCircleCheck } from 'react-icons/fa6';
import styles from './mainService.module.css';
import data from '@/data/mainService';
import { useLanguage } from '@/context/languageContext';
import { useState } from 'react';

import Modal from '@/components/Modal/modal';

const Content = () =>{
    const { language } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [num, setNum] = useState(0)
    const { 
        MAIN_SERVICES, 
        MAIN_SERVICES_CH,
        MAIN_SERVICES_DETAIL_1,
        MAIN_SERVICES_DETAIL_1_CH,
        MAIN_SERVICES_DETAIL_2,
        MAIN_SERVICES_DETAIL_2_CH
    } = data;
    const items = language ==='en'? MAIN_SERVICES: MAIN_SERVICES_CH;
    const serviceDetail = num ===0 ? 
    ( language =='en'?
    MAIN_SERVICES_DETAIL_1: MAIN_SERVICES_DETAIL_1_CH): 
    ( language =='en'? MAIN_SERVICES_DETAIL_2: MAIN_SERVICES_DETAIL_2_CH);


    return (
        <>
            <div className={styles.title_container}>
                <div className={styles.title}>{language ==='en'? 'Main Services':"主要业务"}</div>
                <div className={styles.underline}></div>
            </div>

            <div className={styles.service_container}>
                {items.map((service, index)=>(
                    <div 
                        key={service} 
                        className={styles.service}
                        onClick={() => {
                            setNum(index);
                            setIsModalOpen(true)
                        }}
                    >
                        <FaRegCircleCheck className={styles.qualifyicon}/>
                        <div>{service}</div>
                    </div>
                ))}

            </div>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)}
            >
                
                <div className={styles.main_service_detail}>
                    {serviceDetail.map((eachService, index: number)=>{
                        const { key, value} = eachService;
                        return (
                            <div key={index}>
                                <div className={styles.detail_title}>{key}</div>
                                <div>{value}</div>
                           </div>
                        )
                   })}

                </div>
            </Modal>
        </>
    )
}


export default Content;