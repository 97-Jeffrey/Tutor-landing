import React from 'react';
import styles from './team.module.css';
import Image from 'next/image';
import data from '@/data/team';
import Link from 'next/link';

import RouteButton from '@/elements/button/routeButton';


const Team = () => {

  const { TEAM } = data;


  return (
    <section id='team' className={styles.container}>
        <div className={styles.main_container}>
            <div className={styles.header_container}>
                <div className={styles.header}>Our Team</div>
                <RouteButton 
                   text='View More'
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
                                    <div className={styles.person_name}>{member.name}</div>
                                    <div className={styles.person_note}>{member.note}</div>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>

        </div>

    </section>
  )
}

export default Team