'use client'

import React, { useState } from "react"
import styles from './contactus.module.css'
import { useLanguage } from "@/context/languageContext"

export default function Page(){
    const { language }  =useLanguage()
    const [form, setForm] = useState({ name: '', email: '', message: '', phone: '' });
    const [status, setStatus] = useState('');


    const handleChange = (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleClickEmail = () =>{
        const email = 'acplaning.consulting@gmail.com';
        const subject = encodeURIComponent('Consulting for more info');
        const body = encodeURIComponent('I want to know more about AC Planing!');
        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        const { name, email } = form;
        e.preventDefault();
        if(!name || !email){ 
            setStatus(language ==='en'?'Please Enter both of your Name and Email':"请填写您的姓名和邮箱")
            return;
        }
        setStatus(language ==='en'?'Sending...':'发送中');
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
    
        const data = await res.json();
        setStatus(`${data.message} we will reach out to you shortly.`);
        if (res.ok) setForm({ name: '', email: '', message: '', phone:'' });
    };

    // const createBooking = async () => {
    //     const start = timeConverter(startDate,'America/Vancouver');
    //     if (start == null) return;
    //     const end = addMinute(start, 30);
    //     const res = await fetch("/api/calendar/create", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         title: `1:1 Consultation with ${form.name}`,
    //         description: form.message || `A consultation is booked from tutoring app`,
    //         start,
    //         end,
    //         attendees: [
    //           { email: form.email }
    //         ],
    //       }),
    //       headers: { "Content-Type": "application/json" },
    //       credentials: "include",
    //     });
      
    //     const data = await res.json();
    //     console.log("Event created:", data);
    // }


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
                            <div className={styles.phones}>
                                <div className={styles.block_content}>(1)647-994-6481</div>
                                <div className={styles.block_content}>or</div>
                                <div className={styles.block_content}>(1)672-991-3194</div>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <div className={styles.block_title}>{language ==='en'? `Email us at`:`请发邮件至`}</div>
                            <div 
                                className={styles.block_content}
                                onClick={handleClickEmail}
                            >acplaning.consulting@gmail.com</div>
                        </div>
                    </div>

                    <div className={styles.blocks2}>

                        <div className={styles.block_group}>
                            <div className={`${styles.block_title_2}`}>{language ==='en'? `Or Leave us a message`:`或详情咨询`} </div>
                        </div>

                        <form className={styles.outerForm}>
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
                                    <label className={styles.label} htmlFor='phone'>{language ==='en'? `Your phone`:`您的电话`} </label>
                                    <input 
                                    name='phone'
                                    type='tel'
                                    placeholder={language ==='en'?'Your Phone':"电话"}
                                    value={form.phone}
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
                                className={styles.send_button}
                                onClick={handleSubmit}
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