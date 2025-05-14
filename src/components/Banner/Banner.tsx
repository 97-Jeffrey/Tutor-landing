import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <section id='about-us' className={styles.container}>
            <div className={styles.card_container}>
                <div className={styles.card}>
                    <div className={styles.card_number}>200+</div>
                    <div className={styles.underline}></div>
                    <div className={styles.note}>US universities admission</div>
                </div>

                <div className={styles.card}>
                    <div className={styles.card_number}>300+</div>
                    <div className={styles.underline}></div>
                    <div className={styles.note}>Canadian universities admission</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_number}>500+</div>
                    <div className={styles.underline}></div>
                    <div className={styles.note}>Academic Rewards</div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_number}>95%</div>
                    <div className={styles.underline}></div>
                    <div className={styles.note}>AP 5-Score Percentage</div>
                </div>

            </div>


        </section>
    )
}

export default Banner