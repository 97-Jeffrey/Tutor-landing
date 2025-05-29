'use client'

import React from 'react';
import styles from './team.module.css';
import Link from 'next/link';
import data from '@/data/team';
import Image from 'next/image';
import { useLanguage } from '@/context/languageContext';
import RouteButton from '@/elements/button/routeButton';

const TeamList = () =>{
    const { TEAM } = data;
        const { language } = useLanguage()
    return (
        <>
            <div className={styles.header_container}>
                <div className={styles.header}>{language === 'en'?'Our Team':'我们的团队'}</div>
                <RouteButton
                    text={language === 'en'?'View More':'更多'}
                    url='/team'
                    back={false}
                />
            </div>
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
                                    <div className={styles.person_note}>{language ==='en'? member.note: member.note_ch}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </>
    )
}

export default TeamList