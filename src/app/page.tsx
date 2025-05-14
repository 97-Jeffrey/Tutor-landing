import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/components/Home/Home";
import AboutUs from "@/components/AboutUs/AboutUs";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <AboutUs />
      
    </div>
  );
}
