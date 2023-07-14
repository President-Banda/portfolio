'use client';
import { motion, useScroll } from "framer-motion";
import "./styles.css";

const Scroll = () => {
    const { scrollYProgress } = useScroll();
    
  return (
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
  )
}

export default Scroll