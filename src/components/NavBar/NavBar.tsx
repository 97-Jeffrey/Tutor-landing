'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()

  const handleCloseBar = () =>{
    setIsMenuOpen(false)
  }


  const navItems = [
    { id: 'home', route:'/', label: 'Home' },
    { id: 'about-us', route:'/about-us', label: 'About Us' },
    { id: 'main-service', route:'/main-service', label: 'Main Services' },
    { id: 'course', route:'/course', label: 'Courses' },
    { id: 'team', route:'/team', label: 'Team' },
    { id: 'contact-us', route:'/contact-us', label: 'Contact Us' },
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
                  className={`${styles.navLink} ${usePathname() === item.route? styles.active:""}`}
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
                    className={`${styles.navLink} ${usePathname() === item.route? styles.active:""}`}
                    onClick={handleCloseBar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}