'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Layers3, Users } from 'lucide-react';
import Reveal, { Bounce, Stagger, StaggerItem } from '@/components/Reveal';

const cards=[['Discovery','Understand the business problem, user context and operational reality before jumping into a solution.',Compass],['Product definition','Turn ambiguous needs into journeys, requirements, business rules and usable product decisions.',Layers3],['Stakeholder bridge','Keep business, design, technology, vendors and validation teams moving toward the same outcome.',Users],['Delivery support','Work with technology, QA and validation teams to ensure the solution meets the business need.',ArrowRight]];

export default function About(){return <div className="section about-page">
  <Reveal><p className="eyebrow">02 / ABOUT</p><h1 className="display">Business analysis with a product and technology mindset.</h1></Reveal>
  <Reveal delay={.08}><div className="about-intro"><div className="about-copy"><p className="hero-copy">Working across requirements, workflows, product definition, regulatory technology, validation and delivery — connecting domain teams with technology teams.</p><p className="about-body">I work at the intersection of business context, product thinking and technology delivery, turning ambiguous problems into structured journeys, requirements and outcomes.</p></div><MotionAboutImage /></div></Reveal>
  <Stagger className="capability-grid work-grid">{cards.map(([title,text,Icon])=><StaggerItem key={title}><Bounce><article className="capability"><Icon size={24}/><h3>{title}</h3><p>{text}</p></article></Bounce></StaggerItem>)}</Stagger>
  <Reveal delay={.1}><div className="quote" style={{marginTop:60}}>Good product work sits between the problem people describe and the system the technology team has to build.</div><Link className="button button-dark" style={{marginTop:22}} href="/work">Explore case studies <ArrowRight size={16}/></Link></Reveal>
</div>}

function MotionAboutImage(){return <motion.div className="about-image-wrap" initial={{opacity:0,x:40,scale:.96}} whileInView={{opacity:1,x:0,scale:1}} viewport={{once:true,amount:.25}} transition={{type:'spring',stiffness:170,damping:18}} whileHover={{y:-8,rotate:-1}}><Image className="about-image" src="/about-pranav2.png" alt="Editorial illustration representing business, product and technology work" width={900} height={1100} priority/><div className="about-image-caption">BUSINESS / PRODUCT / TECHNOLOGY</div></motion.div>}
