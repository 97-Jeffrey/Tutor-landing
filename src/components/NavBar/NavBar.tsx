'use client';

import { useState, useEffect } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  console.log(activeSection)

  // // Handle scroll effect
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
      
  //     // Detect which section is in view
  //     const sections = [
  //       'home', 'about-us', 'main-service', 
  //       'main-service', 'popular-courses', 'team', 'contact-us'

  //     ];
  //     for (const section of sections) {
  //       const element = document.getElementById(section);
  //       // console.log(element)
  //       if (element) {
  //         const rect = element.getBoundingClientRect();
  //         console.log(rect)
  //         // if (rect.top <= 100 && rect.bottom >= 100) {
  //           setActiveSection(section);
  //           break;
  //         // }
  //       }
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'main-service', label: 'Main Services' },
    { id: 'popular-courses', label: 'Popular Courses' },
    { id: 'team', label: 'Team' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo that scrolls to top */}
        <button 
          onClick={() => scrollToSection('home')} 
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
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
                >
                  {item.label}
                </button>
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
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`${styles.mobileNavLink} ${activeSection === item.id ? styles.active : ''}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}