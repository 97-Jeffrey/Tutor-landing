
import React from 'react';
import styles from './banner.module.css';
import BannerList from './bannerList';

const Banner = () => {
    return (
        <section id='about-us' className={styles.container}>
            <BannerList />
        </section>
    )
}

export default Banner