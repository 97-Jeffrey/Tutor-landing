import React from 'react';
import styles from './team.module.css';
import TeamList from './teamList';


const Team = () => {



  return (
    <section id='team' className={styles.container}>
        <div className={styles.main_container}>
            <TeamList />

        </div>

    </section>
  )
}

export default Team