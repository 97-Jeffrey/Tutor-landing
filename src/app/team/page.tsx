'use client'

import Image from 'next/image';
import styles from './team.module.css'
import data from '@/data/team'
import Link from 'next/link';
import { useLanguage } from '@/context/languageContext';


export default function Page () {
    const { TEAM }  = data;
    const { language } = useLanguage()

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title_container}>
                    <div className={styles.title}>{language==='en'?  `Our Team`:`我们的团队`}</div>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.team_section}>
                    <div className={styles.team_container}>
                    {
                    TEAM.map(member=>(
                        <Link href={`/team/${member.slug}`}
                            key={member.slug}
                        >
                            <div 
                                className={styles.team_card}
                                
                            >
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    className={styles.avatar}
                                />
                                <div className={styles.detail_container}>
                                    <div className={styles.person_name}>{language==='en'? member.name: member.name_ch}</div>
                                    <div className={styles.person_note}>{language==='en'? member.note: member.note_ch}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

                    </div>

                </div>

            </div>
        </div>
    )
}