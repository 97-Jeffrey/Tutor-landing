'use client'

import styles from './aboutUs.module.css'
import Image from 'next/image'
import OfficeImage from '@/assets/office.png'
import OfficeImage2 from '@/assets/office2.png'
import OfficeImage3 from '@/assets/office3.png'
import { useLanguage } from '@/context/languageContext'
import data from '@/data/aboutUs'


const Content = () =>{
    const { language } = useLanguage()
    const { 
        ABOUT_US_DETAIL_1,
        ABOUT_US_DETAIL_2,
        ABOUT_US_DETAIL_3,
        ABOUT_US_DETAIL_1_CH,
        ABOUT_US_DETAIL_2_CH,
        ABOUT_US_DETAIL_3_CH
    } = data;
    return (
        <>
            <div className={styles.main}>


                <div className={styles.title_container}>
                    <div className={styles.title}>{language ==='en'?"About Us":'关于我们'}</div>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.section}>
                    <Image
                    src={OfficeImage}
                    alt={'office image'}
                    className={styles.section_image}
                    />
                    <div className={styles.description}>
                        {
                        language==='en'?
                        ABOUT_US_DETAIL_1:
                        ABOUT_US_DETAIL_1_CH
                        }
                    </div>

                </div>


                <div className={styles.section_reverse}>
                    <div className={styles.description}>
                       {
                        language==='en'?
                        ABOUT_US_DETAIL_2:
                        ABOUT_US_DETAIL_2_CH
                        }
                    </div>
                    <Image
                    src={OfficeImage2}
                    alt={'office image'}
                    className={styles.section_image}
                    />
                    

                </div>


                <div className={styles.section}>
                    <Image
                    src={OfficeImage3}
                    alt={'office image'}
                    className={styles.section_image}
                    />
                    <div className={styles.description}>
                       {
                        language==='en'?
                        ABOUT_US_DETAIL_3:
                        ABOUT_US_DETAIL_3_CH
                        }


                    </div>
                    
                    

                </div>

</div>
        </>
    )

}
export default Content