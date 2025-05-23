'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/languageContext';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const pathName = usePathname()
  const { language, toggleLanguage } = useLanguage()

  const handleCloseBar = () =>{
    setIsMenuOpen(false)
  }


  const navItems = [
    { id: 'home', route:'/', label: language ==='en'? 'Home': '首页' },
    { id: 'about-us', route:'/about-us', label: language ==='en'? 'About Us': "关于我们" },
    { id: 'main-service', route:'/main-service', label: language ==='en'? 'Main Services':'主要服务' },
    { id: 'course', route:'/course', label: language ==='en'? 'Courses':"课程" },
    { id: 'team', route:'/team', label: language ==='en'? 'Team':"团队" },
    { id: 'contact-us', route:'/contact-us', label:  language ==='en'?'Contact Us':"联系我们" },
  ];

  return (
    <header className={`${styles.header} ${styles.scrolled}`}>
      <div className={styles.container}>
        {/* Logo that scrolls to top */}
        <button 
          onClick={() => router.push('/')} 
          className={styles.logo}
        >
          <span className={styles.logoText}>Brand</span>
          <span className={styles.logoDot}>.</span>
        </button>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id} className={styles.navItem}>
  
                <Link 
                  href={item.route}
                  className={`
                    ${styles.navLink} 
                    ${pathName === item.route ? styles.active:""}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.menuButtonBar}></span>
          <span className={styles.menuButtonBar}></span>
          <span className={styles.menuButtonBar}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isMenuOpen ? styles.open : ''}`}>
          <nav>
            <ul className={styles.mobileNavList}>
              {navItems.map((item) => (
                <li key={item.id} className={styles.mobileNavItem}>
                   <Link 
                    href={item.route}
                    className={`${styles.navLink} ${pathName === item.route? styles.active:""}`}
                    onClick={handleCloseBar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.language_toggle_container}>
            <div 
              className={`${styles.language_toggle_item} ${styles.eng} ${language ==='en'? styles.lang_selected:""}`  }
              onClick={()=> toggleLanguage()}
            >
              Eng
            </div>
            <div 
              className={`${styles.language_toggle_item} ${styles.ch} ${language ==='zh'? styles.lang_selected:""}`}
              onClick={()=> toggleLanguage()}
            >
              中
            </div>
        </div>
      </div>
    </header>
  );
}