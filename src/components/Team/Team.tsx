import React from 'react';
import styles from './team.module.css';
import Image from 'next/image';
import AVATAR1 from '../../assets/avatar.png'
import AVATAR2 from '../../assets/avatar2.png'
import AVATAR3 from '../../assets/avatar3.png'
import AVATAR4 from '../../assets/avatar4.png'
import AVATAR5 from '../../assets/avatar5.png'

const Team = () => {
  return (
    <section id='team' className={styles.container}>
        <div className={styles.main_container}>
            <div className={styles.header_container}>
                <div className={styles.header}>Our Team</div>
                <button className={styles.view_more_button}>View All</button>
            </div>


            <div className={styles.team_container}>
                <div className={styles.team_card}>
                    <Image 
                        src={AVATAR1}
                        alt='avatar1' 
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.person_name}>Alex Chen</div>
                        <div className={styles.person_note}>Econ instructor</div>
                    </div>
                </div>
                <div className={styles.team_card}>
                    <Image 
                        src={AVATAR2}
                        alt='avatar1' 
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.person_name}>Miko Ela</div>
                        <div className={styles.person_note}>AP Math instructor</div>
                    </div>
                </div>
                <div className={styles.team_card}>
                    <Image 
                        src={AVATAR3}
                        alt='avatar1' 
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.person_name}>Wiki Wola</div>
                        <div className={styles.person_note}>Econ instructor</div>
                    </div>
                </div>
                <div className={styles.team_card}>
                    <Image 
                        src={AVATAR4}
                        alt='avatar1' 
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.person_name}>Brian Wang </div>
                        <div className={styles.person_note}>Biology instructor</div>
                    </div>
                </div>
                <div className={styles.team_card}>
                    <Image 
                        src={AVATAR5}
                        alt='avatar1' 
                        className={styles.avatar}
                    />
                    <div>
                        <div className={styles.person_name}>Mitoka Kata</div>
                        <div className={styles.person_note}>AP Chemistry instructor</div>
                    </div>

                </div>

            </div>

        </div>

    </section>
  )
}

export default Team