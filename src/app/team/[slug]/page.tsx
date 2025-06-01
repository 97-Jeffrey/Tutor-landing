'use client'

import styles from './teamDetail.module.css'
import { useParams } from 'next/navigation';
import data from '@/data/team'
import Image from 'next/image';
import RouteButton from '@/elements/button/routeButton';
import { useLanguage } from '@/context/languageContext';

export default function Page () {

    const params = useParams();
    const { language } = useLanguage();
    const { slug } = params;


    const member  = data.TEAM.find(member=> member.slug ===slug)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.all_team_button_container}>
                        <RouteButton 
                           text={language ==='en'?`Team`: `其他团队成员`}
                           url='/team'
                           back={true}
                        />
                </div>

                <div className={styles.content}>
                    {member?.image 
                        &&
                    <Image
                        src={member?.image}
                        alt={member.name}
                        className={styles.image}
                    />}

                    <div className={styles.name}>{language ==='en'? member?.name: member?.name_ch}</div>
                    <div className={styles.note}>{language ==='en'?  member?.note: member?.note_ch}</div>
                    <div className={styles.personal_detail}>{language ==='en'? member?.personal_detail: member?.personal_detail_ch}</div>

                </div>
            </div>


       

        </div>
    )
}