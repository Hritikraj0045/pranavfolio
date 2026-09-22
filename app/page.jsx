'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BarChart3, Building2, CheckCircle2, Database, FileText, LayoutDashboard, Linkedin, Mail, Rocket, Search, Settings, TrendingUp, Users } from 'lucide-react';
import Reveal, { Bounce, Stagger, StaggerItem } from '@/components/Reveal';
import CaseStudyCard from '@/components/CaseStudyCard';
import { caseStudies } from '@/data/caseStudies';

const metrics = [
  [Rocket, '150+', 'Production releases'],
  [Users, '350+', 'Business partners supported'],
  [Database, '₹2,500 Cr+', 'AUM impacted'],
  [TrendingUp, '₹500 Cr+', 'Business growth supported'],
  [Building2, '5,000+', 'Listed entities supported'],
  [CheckCircle2, '100%', 'Regulatory compliance maintained'],
];

const approach = [
  [Search, '01 Discover', 'Understand users, business needs and the problem.'],
  [FileText, '02 Define', 'Translate needs into requirements, rules and workflows.'],
  [LayoutDashboard, '03 Design', 'Create user journeys, wireframes and functional experiences.'],
  [CheckCircle2, '04 Prioritize', 'Balance business value, user needs, regulatory requirements and feasibility.'],
  [Settings, '05 Deliver', 'Work with technology, QA, vendors and stakeholders through UAT and release.'],
  [BarChart3, '06 Improve', 'Use feedback and business needs to drive enhancements.'],
];

export default function Home() {
  return <div className="home-page">
    <section className="home-hero">
      <div className="home-hero-inner">
        <Reveal>
          <p className="eyebrow">BUSINESS ANALYST | PRODUCT PROFESSIONAL</p>
          <h1>Building better products across FinTech, Wealth Management &amp; Capital Markets.</h1>
          <p className="home-hero-copy">I bridge business problems, regulatory requirements and technology to turn complex ideas into scalable digital products.</p>
          <div className="home-tags">FinTech <span/> Wealth Management <span/> Capital Markets <span/> Regulatory Technology <span/> AI</div>
          <div className="hero-actions">
            <Link className="button button-dark" href="/work">View My Work <ArrowRight size={16}/></Link>
            <Link className="button button-outline" href="/contact">Let's Connect</Link>
          </div>
        </Reveal>
        <Reveal delay={.12} className="hero-illustration-wrap">
          <div className="hero-illustration">
            <motion.div className="hero-portrait" initial={{opacity:0,y:28,scale:.94}} animate={{opacity:1,y:0,scale:1}} transition={{type:'spring',stiffness:125,damping:17,delay:.18}}>
              <Image src="/about-pranav2.png" alt="Editorial portrait of Pranav Sonar" fill sizes="280px" priority className="hero-portrait-image"/>
            </motion.div>
            {/* <div className="hero-note">From problem to impact<span>↘</span></div>
            <div className="hero-flow">
              {[[Users,'Understand','Business Needs'],[FileText,'Define','Requirements'],[LayoutDashboard,'Design','Solution'],[Settings,'Build with','Technology'],[BarChart3,'Deliver','Impact']].map(([Icon,a,b],i)=><motion.div key={a} className="hero-flow-card" whileHover={{y:-9,scale:1.035,rotate:i%2?1:-1}} transition={{type:'spring',stiffness:280,damping:16}}><Icon size={25}/><b>{a}</b><small>{b}</small></motion.div>)}
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>

    <Stagger className="home-metrics">{metrics.map(([Icon,value,label]) => <StaggerItem key={label}><motion.div className="home-metric" whileHover={{y:-5}} transition={{type:'spring',stiffness:260,damping:18}}><Icon size={23}/><strong>{value}</strong><span>{label}</span></motion.div></StaggerItem>)}</Stagger>

    <section className="section home-about">
      <Reveal><div className="section-heading"><div><p className="eyebrow">ABOUT ME</p><h2>I work where business, product and technology meet.</h2></div><div className="home-about-copy"><p>My experience spans Wealth Management, Mutual Funds, Capital Markets and Regulatory Technology, where I've worked on digital products, regulatory platforms, AI-enabled solutions and complex financial workflows.</p><p>From defining requirements and user journeys to working with technology teams, vendors and business stakeholders, I focus on turning complex business problems into practical, scalable solutions.</p><Link className="button button-small" href="/about">More About Me <ArrowRight size={15}/></Link></div></div></Reveal>
    </section>

    <section className="section home-work">
      <Reveal><div className="section-title-row"><div><p className="eyebrow">FEATURED WORK</p><h2>Selected Case Studies</h2></div><Link className="text-link" href="/work">View All Case Studies <ArrowRight size={15}/></Link></div></Reveal>
      <Stagger className="case-grid">{Object.values(caseStudies).map(s => <StaggerItem key={s.slug}><CaseStudyCard study={s}/></StaggerItem>)}</Stagger>
    </section>

    <section className="section home-approach">
      <Reveal><div className="approach-layout"><div><p className="eyebrow">MY APPROACH</p><h2>From complex problems to usable products.</h2></div><div className="approach-track">{approach.map(([Icon,title,text],i)=><motion.div key={title} className="approach-step" whileHover={{y:-8,scale:1.025}} transition={{type:'spring',stiffness:250,damping:17}}><div className="approach-icon"><Icon size={23}/></div><ArrowRight className="approach-arrow" size={19}/><b>{title}</b><p>{text}</p></motion.div>)}</div></div></Reveal>
    </section>

    <section className="section home-experience"><Reveal><div className="home-experience-grid"><div><p className="eyebrow">EXPERIENCE</p><h2>A journey across financial technology & digital products.</h2></div><div className="experience-cards">{[['AR','AR Digital Wealth','Business Analyst — Product Tech','Mar 2026 — Present'],['BSE','BSE','Deputy Manager — Regulatory Projects','Jun 2025 — Mar 2026'],['OptaIoT','OptaIoT','Scrum Master Intern',''],['Oasis Infobyte','Oasis Infobyte','Web Developer','']].map(([mark,name,role,date])=><motion.div key={name} className="experience-card" whileHover={{y:-6,scale:1.015}} transition={{type:'spring',stiffness:260,damping:18}}><div className="experience-mark">{mark}</div><b>{name}</b><span>{role}</span><small>{date}</small><ArrowUpRight size={15}/></motion.div>)}</div></div></Reveal></section>

    <section className="section home-skills"><Reveal><div className="home-skills-grid"><div><p className="eyebrow">EXPERTISE</p><h2>Key Skills & Domains</h2></div><div className="skill-columns"><div><b>Product & Business Analysis</b><p>Requirements Engineering · Product Discovery · User Stories · BRD · FRD · PRD · Process Mapping · UAT · Stakeholder Management</p></div><div><b>Product Delivery</b><p>Product Ownership · Backlog Prioritization · Roadmaps · Feature Prioritization · Release Management · SDLC</p></div><div><b>Financial Technology</b><p>Wealth Management · Mutual Funds · Capital Markets · Payments · Regulatory Technology</p></div><div><b>Technology</b><p>API Integration · SQL · Power BI · Python · Jira · Confluence · Figma</p></div></div></div></Reveal></section>

    <section className="home-cta"><div className="cta-overlay"/><Reveal><div className="cta-content"><div><h2>Have a complex problem worth solving?</h2><p>Whether it's a product challenge, a business process, or a technology initiative, I'm interested in understanding the problem and finding a better way forward.</p></div><div className="cta-actions"><Link className="button button-light" href="/contact">Let's Connect <ArrowRight size={16}/></Link><a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a><a href="mailto:hello@example.com"><Mail size={18}/> Email</a></div></div></Reveal></section>

    <footer className="footer"><b>Pranav Sonar</b><div>{['Home','About','Experience','Case Studies','Skills','Contact'].map(x=><Link key={x} href={x==='Home'?'/':x==='Case Studies'?'/work':`/${x.toLowerCase()}`}>{x}</Link>)}</div><span>© 2025 Pranav Sonar. All rights reserved.</span></footer>
  </div>;
}
