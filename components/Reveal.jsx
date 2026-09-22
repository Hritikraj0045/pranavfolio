'use client';
import { motion, useReducedMotion } from 'framer-motion';

export default function Reveal({ children, delay = 0, className = '', amount = .12 }) {
  const reduce = useReducedMotion();
  return <motion.div
    className={className}
    initial={reduce ? false : { opacity: 0, y: 34, scale: .965 }}
    whileInView={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount }}
    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 105, damping: 16, mass: .72, delay }}
  >{children}</motion.div>;
}

export function Stagger({ children, className = '', delay = 0 }) {
  const reduce = useReducedMotion();
  return <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: .08 }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : .075, delayChildren: reduce ? 0 : delay } } }}
  >{children}</motion.div>;
}

export function StaggerItem({ children, className = '' }) {
  const reduce = useReducedMotion();
  return <motion.div
    className={className}
    variants={{ hidden: reduce ? {} : { opacity: 0, y: 22, scale: .97 }, show: { opacity: 1, y: 0, scale: 1 } }}
    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 15, mass: .7 }}
  >{children}</motion.div>;
}

export function Bounce({ children, className = '' }) {
  return <motion.div className={className} whileHover={{ y: -5, scale: 1.018, rotateX: .5 }} whileTap={{ scale: .975, y: 0 }} transition={{ type: 'spring', stiffness: 360, damping: 18, mass: .55 }}>{children}</motion.div>;
}
