'use client'

import React from "react"
import styles from './contactus.module.css'
import { useLanguage } from "@/context/languageContext"

export default function Page(){
    const { language }  =useLanguage()
    return(
        <>
            <div className={styles.container}>

                <div className={styles.main}>
                    <div className={styles.title_container}>
                        <div className={styles.title}>{language ==='en'? `Contact Us`:`联系我们`}</div>
                        <div className={styles.underline}></div>
                    </div>

                    <div className={styles.blocks}>
                        <div className={styles.block}>
                            <div className={styles.block_title}>Call Us At</div>
                            <div className={styles.block_content}>123-456-7890</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_title}>Email Us At</div>
                            <div className={styles.block_content}>abcde@gmail.com</div>
                        </div>
                    </div>

                    <div className={styles.blocks2}>
                        <div className={styles.block_title}>Or Leave Us A Message </div>

                        <div className={styles.form}>
                            <div className={styles.formItem}>
                                <label className={styles.label} htmlFor='name'>Your Name</label>
                                <input 
                                   name='name'
                                   type='text'
                                   placeholder='Your Name'
                                   className={styles.input}
                                 
                                />
                                
                            </div>

                            <div className={styles.formItem}>
                                <label className={styles.label} htmlFor='name'>Your Email</label>
                                <input 
                                   name='email'
                                   type='text'
                                   placeholder='Your Email Address'
                                   className={styles.input}
                                 
                                />
                                
                            </div>

                            <div className={styles.formItem}>
                                <label className={styles.label} htmlFor='name'>Message</label>
                                <textarea 
                                   name='email'
                                   rows={6}
                                   placeholder='Your Email Address'
                                   className={styles.input}
                                 
                                />
                                
                            </div>

                            <button className={styles.send_button}>Send</button>

                        </div>
                        
                    </div>

                </div>

            </div>
        </>
    )
}