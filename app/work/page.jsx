'use client';
import { motion } from 'framer-motion';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CaseStudyCard from '@/components/CaseStudyCard';
import PageIntroVisual from '@/components/PageIntroVisual';
import { caseStudies } from '@/data/caseStudies';

export default function Work(){return <div className="section">
  <div className="page-intro-grid">
  <Reveal><p className="eyebrow">WORK / 03 CASE STUDIES</p><motion.h1 className="display" initial={{opacity:0,y:45,scale:.94}} animate={{opacity:1,y:0,scale:1}} transition={{type:'spring',stiffness:90,damping:15,delay:.08}}>Work shaped by requirements, systems and outcomes.</motion.h1><p className="page-intro-copy">Selected product, regulatory technology and AI workflow case studies — showing the problem, decisions, collaboration and delivery behind the work.</p></Reveal>
  <PageIntroVisual label="PRODUCT / REGTECH / AI" variant="editorial"/>
</div>
  <Stagger className="case-grid work-grid">{Object.values(caseStudies).map((s)=><StaggerItem key={s.slug}><CaseStudyCard study={s}/></StaggerItem>)}</Stagger>
</div>}
