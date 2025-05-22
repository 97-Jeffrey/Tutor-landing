import Image from 'next/image';
import styles from './team.module.css'
import data from '@/data/team'
import Link from 'next/link';


export default function Page () {
    const { TEAM }  = data;

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.title_container}>
                    <div className={styles.title}>Our Team</div>
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
                                    <div className={styles.person_name}>{member.name}</div>
                                    <div className={styles.person_note}>{member.note}</div>
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