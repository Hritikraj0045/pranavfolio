'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PageIntroVisual({label='BUSINESS / PRODUCT / TECHNOLOGY', variant='portrait'}) {
  return (
    <motion.div
      className={`page-intro-visual ${variant}`}
      initial={{opacity:0, x:42, scale:.94}}
      whileInView={{opacity:1, x:0, scale:1}}
      viewport={{once:true, amount:.2}}
      transition={{type:'spring', stiffness:150, damping:18, mass:.75}}
      whileHover={{y:-8, rotate:variant==='portrait' ? -1 : 1}}
    >
      <Image
        src="/about-pranav2.png"
        alt="Editorial portrait of Pranav Sonar"
        fill
        sizes="(max-width: 900px) 100vw, 42vw"
        className="page-intro-image"
        priority={variant === 'portrait'}
      />
      <div className="page-intro-overlay"/>
      <span className="page-intro-label">{label}</span>
      <span className="page-intro-index">PRANAV / 2026</span>
    </motion.div>
  );
}
