import styles from "./page.module.css";

import Hero from "@/components/Home/Home";
import AboutUs from "@/components/AboutUs/AboutUs";
import WhyUs from "@/components/WhyUs/whyUs";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutUs />
      <WhyUs />
      {/* <Course /> */}
      {/* <Team /> */}

      
    </div>
  );
}
