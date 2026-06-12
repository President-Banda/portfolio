'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import "./styles.css";

const Scroll = () => {
  const { scrollYProgress } = useScroll();
  const [pct, setPct] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", v => {
      const rounded = Math.round(v * 100);
      setPct(rounded);
      setVisible(rounded > 2 && rounded < 100);
    });
    return unsub;
  }, [scrollYProgress]);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Floating percentage badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-red-700 text-white
                   flex items-center justify-center shadow-lg font-[Dosis] font-bold text-xs
                   select-none pointer-events-none"
        aria-hidden="true"
      >
        {pct}%
      </motion.div>
    </>
  );
};

export default Scroll;
