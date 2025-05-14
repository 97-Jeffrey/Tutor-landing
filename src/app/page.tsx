import styles from "./page.module.css";

import Hero from "@/components/Home/Home";
import AboutUs from "@/components/AboutUs/AboutUs";
import Banner from "@/components/Banner/Banner";
import Course from "@/components/Course/Course";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Banner />
      <AboutUs />
      <Course />

      
    </div>
  );
}
