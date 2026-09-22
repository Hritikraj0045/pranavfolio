'use client';
import { motion } from 'framer-motion';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import PageIntroVisual from '@/components/PageIntroVisual';
const g=[['Product & Business Analysis','Product Discovery · User Stories · BRD · FRD · PRD · Process Mapping · UAT · Stakeholder Management'],['Product Delivery','Product Ownership · Backlog Prioritization · Roadmaps · Feature Prioritization · Release Management · SDLC'],['Financial Technology','Wealth Management · Mutual Funds · Capital Markets · Payments · Regulatory Technology'],['Technology','API Integration · SQL · Power BI · Python · Jira · Confluence · Figma'],['RegTech','Regulatory interpretation · XBRL/iXBRL· Reconciliation · Disclosure workflows'],['Product / UX','Wireframes · Workflow design · Findings UX · Traceability'],['Data & Analytics','Data analysis · Data visualization · Power BI · Tableau · SQL · Python'],['Project Management','Agile / Scrum / Kanban · Jira / Confluence · Stakeholder management · Delivery planning']];
export default function Skills(){return <div className="section"><div className="page-intro-grid">
  <Reveal><p className="eyebrow">04 / SKILLS</p><h1 className="display">Skills & domains.</h1><p className="page-intro-copy">A blend of business analysis, product delivery, financial technology, regulatory workflows and technical collaboration.</p></Reveal>
  <PageIntroVisual label="BUSINESS ANALYSIS / DELIVERY" variant="editorial"/>
</div><Stagger className="capability-grid work-grid">{g.map(([a,b])=><StaggerItem key={a}><motion.div className="capability" whileHover={{y:-7,scale:1.018}} transition={{type:'spring',stiffness:260,damping:17}}><h3>{a}</h3><p>{b}</p></motion.div></StaggerItem>)}</Stagger></div>}
