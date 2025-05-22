'use client'

import styles from './teamDetail.module.css'
import { useParams } from 'next/navigation';
import data from '@/data/team'
import Image from 'next/image';
import RouteButton from '@/elements/button/routeButton';

export default function Page () {

    const params = useParams();
    const { slug } = params;


    const member  = data.TEAM.find(member=> member.slug ===slug)

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.all_team_button_container}>
                        <RouteButton 
                           text='Team'
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

                    <div className={styles.name}>{member?.name}</div>
                    <div className={styles.note}>{member?.note}</div>
                    <div className={styles.personal_detail}>{member?.personal_detail}</div>

                </div>
            </div>


       

        </div>
    )
}