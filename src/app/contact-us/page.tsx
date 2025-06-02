'use client'

import React, { useState } from "react"
import styles from './contactus.module.css'
import { useLanguage } from "@/context/languageContext"

export default function Page(){
    const { language }  =useLanguage()
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
  
    const handleChange = (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        const { name, email } = form;
        e.preventDefault();
        if(!name || !email){ 
            setStatus(language ==='en'?'Please Enter both of your Name and Email':"请填写你的姓名和邮箱")
            return;
        }
        setStatus(language ==='en'?'Sending...':'发送中');
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
        setStatus(data.message);
        if (res.ok) setForm({ name: '', email: '', message: '' });
      };
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
                            <div className={styles.block_title}>{language ==='en'? `Call us at`:`请致电`}</div>
                            <div className={styles.block_content}>123-456-7890</div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_title}>{language ==='en'? `Email us at`:`请发邮件至`}</div>
                            <div className={styles.block_content}>abcde@gmail.com</div>
                        </div>
                    </div>

                    <div className={styles.blocks2}>
                        <div className={styles.block_title}>{language ==='en'? `Or Leave us a message`:`或详情咨询`} </div>

                        <form onSubmit={handleSubmit}>
                            <div 
                                className={styles.form}
                        
                            >
                                <div className={styles.formItem}>
                                    <label className={styles.label} htmlFor='name'>{language ==='en'?`Your Name`:`您的姓名`}</label>
                                    <input 
                                    name='name'
                                    type='text'
                                    placeholder={language ==='en'?'Your Name':"姓名"}
                                    value={form.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    />
                                    
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.label} htmlFor='name'>{language ==='en'? `Your Email`:`您的邮箱`} </label>
                                    <input 
                                    name='email'
                                    type='text'
                                    placeholder={language ==='en'?'Your Email Address':"邮箱"}
                                    value={form.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    />
                                    
                                </div>

                                <div className={styles.formItem}>
                                    <label className={styles.label} htmlFor='name'>{language ==='en'?`Message`:`资讯信息`}</label>
                                    <textarea 
                                    name='message'
                                    rows={6}
                                    placeholder={language ==='en'?'Your messsage for us':"具体信息"}
                                    value={form.message}
                                    onChange={handleChange}
                                    className={styles.input}    
                                    />
                                    
                                </div>

                            </div>

                            <button 
                                type="submit" 
                                className={styles.send_button}
                            >
                                {language ==='en'?`Send`: `发送`}
                            </button>

                            <p className={
                                status==='Please Enter both of your Name and Email'? 
                                styles.message_error: styles.message}
                            >
                                {status}
                            </p>

                        </form>
                        
                    </div>

                </div>

            </div>
        </>
    )
}