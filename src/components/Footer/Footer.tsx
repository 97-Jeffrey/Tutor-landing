
import React from "react"
import styles from './footer.module.css'
import Link from "next/link"
import { IoLogoWechat } from "react-icons/io5";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer  = () =>{
    return (
        <section id='footer' className={styles.container}>
            <div className={styles.main}>
                <div className={styles.basic_section}>
                    <div className={styles.address}>
                        <div>208 - 2112 West Broadway</div>
                        <div>Vancouver, BC V6K 2C8</div>
                        <div>Direction</div>
                    </div>
                    <div className={styles.address}>
                        <div>Office: 604-733-2776</div>
                        <div>Email: info@yeseducation.com</div>
                        <div>Contact Us</div>
                    </div>
                </div>

                <div className={styles.basic_section}>
                    <div className={styles.navigator}>
                        <Link href={'/about-us'}>About Us</Link>
                        <Link href={'/main-service'}>Main Service</Link>
                        <Link href={'/course'}>Popular Courses</Link>
                        <Link href={'/team'}>Our Team</Link>
                    </div>

                </div>

                <div className={styles.basic_section}>
                    <div className={styles.icons}>
                        <IoLogoWechat />
                        <CiInstagram />
                        <CiFacebook />
                        <CiYoutube />
                    </div>

                </div>



            </div>

            <div className={styles.divider}></div>

            <div className={styles.copyright_container}>
                <div>Copyright 2025 © All rights Reserved YES EDUCATION CENTER INC. </div>
                <div>Web Design by Jeffrey</div>

            </div>


        </section>
    )
}

export default Footer