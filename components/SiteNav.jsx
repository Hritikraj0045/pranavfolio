'use client';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const items = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/experience', 'Experience'],
  ['/work', 'Case Studies'],
  ['/skills', 'Skills'],
  ['/contact', 'Contact'],
];

export default function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const activePath = pathname === '/' ? '/' : pathname.startsWith('/work') ? '/work' : pathname;
  const isHome = activePath === '/';
  const visibleItems = isHome ? items : items.filter(([href]) => href !== '/');

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link className="brand" href="/">Pranav Sonar</Link>

        <nav className="nav-links" aria-label="Primary navigation">
          {visibleItems.map(([href, label]) => {
            const active = href === activePath;
            return (
              <Link key={href} href={active ? '/' : href} className={active ? 'active' : ''} aria-label={active ? `Return to Home from ${label}` : label}>
                <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.94 }}>{active ? 'Home' : label}</motion.span>
                {active && <motion.i layoutId="nav-active" className="nav-active" transition={{ type: 'spring', stiffness: 420, damping: 28 }} />}
              </Link>
            );
          })}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="nav-connect" href="/contact"><span>Let's Connect</span><ArrowUpRight size={14}/></Link>
          <motion.button className="nav-burger" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(v => !v)} whileTap={{ scale: .88 }}>
            <AnimatePresence mode="wait" initial={false}>
              {open ? <motion.span key="close" initial={{rotate:-90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:90,opacity:0}}><X size={22}/></motion.span> : <motion.span key="menu" initial={{rotate:90,opacity:0}} animate={{rotate:0,opacity:1}} exit={{rotate:-90,opacity:0}}><Menu size={22}/></motion.span>}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{opacity:0,y:-12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{type:'spring',stiffness:330,damping:25}}>
            <nav aria-label="Mobile navigation">
              {visibleItems.map(([href,label],i) => {
                const active = href === activePath;
                return <motion.div key={href} initial={{opacity:0,x:18}} animate={{opacity:1,x:0}} transition={{delay:i*.045,type:'spring',stiffness:260,damping:20}}>
                  <Link href={active ? '/' : href} className={active ? 'mobile-active' : ''}>{active ? 'Home' : label}<ArrowUpRight size={17}/></Link>
                </motion.div>;
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
