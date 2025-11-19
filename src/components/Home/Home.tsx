'use client'

import React, { useState } from 'react';
import styles from './hero.module.css';
import Image from 'next/image';
import HomeImage from '../../assets/home.png'
import { FaRegCircleCheck } from "react-icons/fa6";
import { HEADER, HEADER_CH, SUB_HEADER, SUB_HEADER_CH, ATTRACTIONS } from '@/data/home';
import { useLanguage } from '@/context/languageContext';

const Hero = () => {
  const {  language } = useLanguage()
  const [form, setForm] = useState({ 
    name: '', 
    email: '', 
    phone: '',
    message: '' });
  const [status, setStatus] = useState('');


  const handleChange = (e:  React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
      setStatus(`${data.message}, We will reach out to you shortly`);
      if (res.ok) setForm({ name: '', email: '', message: '', phone:'' });
  };

  return (
    <section className={styles.hero} id='home'>
      {/* Background Image */}

      <div className={styles.backgroundImage}>
        <Image
          src={HomeImage} // Update with your image path
          alt="Background"
          fill
          priority
          quality={100}
          className={styles.image}
        />
        {/* Overlay */}
        <div className={styles.overlay}></div>
      </div>


      <div className={styles.content}>
        <h1 className={styles.title}>{language ==='en'? HEADER: HEADER_CH}</h1>
        <p className={styles.subtitle}>{language ==='en'? SUB_HEADER: SUB_HEADER_CH}</p>
        <div className={styles.qualifylist}>
            {ATTRACTIONS.map(item=>(
                <div 
                  className={styles.qualifyitem}
                  key={item[0]}
                >
                  <FaRegCircleCheck className={styles.qualifyicon}/>
                  {language==='en'? item[0]: item[1]} 
                </div>
            ))}
        </div>

        <div className={styles.info_block}>

            <div className={styles.block_group}>
                <div className={`${styles.block_title_2}`}>{language ==='en'? `Get consultation today`:`或详情咨询`} </div>
            </div>

            <form className={styles.outerForm}>
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
                    <label className={styles.label} htmlFor='name'>{language ==='en'? `Your Phone`:`您的电话`} </label>
                    <input 
                      name='phone'
                      type='tel'
                      placeholder={language ==='en'?'Your Phone':"电话"}
                      value={form.phone}
                      onChange={handleChange}
                      className={styles.input}
                    />
                    
                </div>

                <div className={styles.formItemTextarea}>
                    <label className={styles.label} htmlFor='name'>{language ==='en'?`Message`:`资讯信息`}</label>
                    <textarea 
                      name='message'
                      rows={3}
                      placeholder={language ==='en'?'Your messsage for us':"具体信息"}
                      value={form.message}
                      onChange={handleChange}
                      className={styles.textarea}    
                    />
                    
                </div>

            </form>

            <button 
              className={styles.send_button}
              onClick={handleSubmit}
              disabled={(!form.name ||!form.email) || status === 'Sending' || status === '发送中'}
            >
              {
              language ==='en'?
              (status === 'Sending...'?
              `Sending`: `Send`): 
              (status === '发送中'?
                `发送中`: `发送`)
              }
            </button>

           {
            status 
            &&
            (status !== 'Sending...' && status !== "发送中")
            &&
            <p className={
                status==='Please Enter both of your Name and Email'? 
                styles.message_error: styles.message}
            >
                {status}
            </p>
           }
            
        </div>
  
      </div>

      
    </section>
  );
};

export default Hero;