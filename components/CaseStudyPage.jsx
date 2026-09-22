"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { BeforeAfter, ProductPillars, MobileShowcase, WireframeLightbox, IntegrationNodes, ReleaseTimeline, FeedbackLoop } from "./case-study/CaseVisuals";

function Flow({ items }) { return <div className="flow"><div className="flow-row">{items.map((item, i) => <motion.div key={item} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{type:'spring',stiffness:180,damping:15,mass:.55,delay:i*.045}} className="flow-node">{item}</motion.div>)}</div></div>; }
function Section({ number, title, children, dark=false }) { return <Reveal><section className={`case-section ${dark?"case-section-dark":""}`}><div className="case-section-grid"><div><p className="eyebrow">{number} / CASE STUDY</p><h2>{title}</h2></div><div>{children}</div></div></section></Reveal>; }

function CaseOne({ study }) {
  return <>
    <Section number="01" title="The problem"><p className="case-copy">{study.problem}</p><BeforeAfter/><div className="bullet-grid">{study.painPoints.map(x=><div className="bullet" key={x}>{x}</div>)}</div></Section>
    <Section number="02" title="Product objective"><div className="objective-callout"><span>DESIGNED TO CHANGE</span><p>{study.objective}</p></div></Section>
    <Section number="03" title="My role"><p className="case-copy">I joined the initiative midway through the project. While the technology stack had already been defined, I owned the business and product definition layer of the application.</p><div className="role-grid">{study.roleItems.map((x,i)=><motion.div whileHover={{y:-4}} className="role-card" key={x}><span>{String(i+1).padStart(2,"0")}</span><b>{x}</b></motion.div>)}</div></Section>
    <Section number="04" title="Discovery & product definition"><Flow items={study.discovery}/><p className="case-copy">Features were prioritized using <strong>Business Importance + Partner Demand + Delivery Constraints.</strong> Discovered problems were translated into user journeys, functional requirements, business rules and wireframes.</p><div className="discovery-chain"><span>Problem</span><b>→</b><span>User Journey</span><b>→</b><span>Wireframe</span><b>→</b><span>Final UI</span></div></Section>
    <Section number="05" title="Product solution"><ProductPillars capabilities={study.capabilities}/></Section>
    <Section number="06" title="UX journey & wireframes"><MobileShowcase/><WireframeLightbox/></Section>
    <Section number="07" title="Technical collaboration"><IntegrationNodes nodes={study.integration}/><p className="case-copy">The core technology stack and existing API documentation were already available. The role was to define functional integration flows and ensure existing capabilities supported the product journeys.</p><div className="guardrail">API development was not claimed. The portfolio positioning is functional integration definition, response structuring, API testing, encryption validation and technical collaboration.</div></Section>
    <Section number="08" title="UAT & release"><ReleaseTimeline items={study.timeline}/><p className="case-copy">Build → Testing → Defects → Fix → Retest → Defect-Free Validation → Sign-off → Beta Release → Beta Testing → Fix/Re-release → Final Sign-off → Production Release.</p></Section>
    <Section number="09" title="Post-launch feedback"><FeedbackLoop items={study.feedback}/></Section>
    <Section number="10" title="Impact & outcomes"><div className="impact-grid impact-grid-large">{study.impact.map(([a,b])=><div className="impact" key={a}><strong>{a}</strong><p>{b}</p></div>)}</div></Section>
  </>;
}
function CaseTwo({ study }) { return <><Section number="01" title="Regulatory problem"><p className="case-copy">{study.problem}</p><Flow items={["Designated employees","Investment alignment","Quarterly disclosure"]}/></Section><Section number="02" title="Translation layer"><Flow items={study.translation}/></Section><Section number="03" title="Solution overview"><Flow items={study.solution}/></Section><Section number="04" title="AMC vs RTA reconciliation"><div className="integration"><div className="integration-card"><strong>AMC Submission</strong><p>Scheme · Quarter · Reported Investment</p></div><div className="integration-middle"><strong>BSE Matching Layer</strong><p>Match → disclosure<br/>Discrepancy → correction</p></div><div className="integration-card"><strong>RTA Submission</strong><p>Scheme · Quarter · Holdings Amount</p></div></div></Section><Section number="05" title="Scale & impact"><div className="impact-grid">{study.impact.map(([a,b])=><div className="impact" key={a}><strong>{a}</strong><p>{b}</p></div>)}</div></Section></>; }
function CaseThree({ study }) { return <><Section number="01" title="The problem"><p className="case-copy">{study.problem}</p></Section><Section number="02" title="Document types"><div className="capability-grid">{study.documents.map((x,i)=><div className="capability" key={x}><p>DOCUMENT 0{i+1}</p><h3>{x}</h3><p>Anonymized document category feeding the review workflow.</p></div>)}</div></Section><Section number="03" title="Requirement → AI checks"><Flow items={["Regulatory / Exchange Requirements","~300 Checklist Points","3 Independent Checklists","Parallel AI Processing","Consolidated Findings"]}/></Section><Section number="04" title="End-to-end workflow"><Flow items={study.workflow}/><p className="case-copy">The AI output was designed to remain explainable and traceable to source evidence rather than presenting an unexplained pass/fail result.</p></Section><Section number="05" title="Findings & traceability"><div className="integration"><div className="integration-card"><strong>FICTIONAL PDF</strong><p>Highlighted source section</p></div><div className="integration-middle"><strong>Finding</strong><p>Requirement → Finding → Page → Open Source Page</p></div><div className="integration-card"><strong>LISTING UI</strong><p>Finding detail + page reference</p></div></div></Section><Section number="06" title="Impact"><div className="impact-grid">{study.impact.map(([a,b])=><div className="impact" key={a}><strong>{a}</strong><p>{b}</p></div>)}</div></Section></>; }

export default function CaseStudyPage({ study }) {
  const isOne = study.slug === "partner-rm-mobile";
  const isTwo = study.slug === "skin-in-the-game";
  return <div className="case-page">
    <motion.section className="case-hero" initial={{opacity:0,y:28,scale:.985}} animate={{opacity:1,y:0,scale:1}} transition={{type:'spring',stiffness:95,damping:16,mass:.8}}>
      <Link className="back" href="/work"><ArrowLeft size={14}/> ALL WORK</Link>
      <div className="case-hero-grid"><div><p className="eyebrow">{study.index} / {study.category}</p><h1>{study.title}</h1><p className="case-tagline">{study.tagline}</p></div><div className="hero-case-visual"><div className="hero-visual-grid"/><div className="hero-visual-label">CASE STUDY / {study.index}</div><div className={`hero-visual-mark ${study.visual}`}>{study.visual === "phone" ? "APP" : study.visual === "flow" ? "RULES → DATA → CONTROL" : "AI / REVIEW"}</div></div></div>
      <div className="case-meta"><span className="pill">{study.role}</span><span className="pill">{study.domain}</span>{study.metrics.map(m=><span className="pill" key={m}>{m}</span>)}</div>
    </motion.section>
    <div className="case-content">{isOne ? <CaseOne study={study}/> : isTwo ? <CaseTwo study={study}/> : <CaseThree study={study}/>}<Reveal><section className="case-section"><div className="quote"><span className="eyebrow">KEY LEARNING</span>{study.learning}</div></section></Reveal><div className="case-next"><Link className="text-link" href="/work"><ArrowLeft size={16}/> Back to work</Link><Link className="text-link" href="/contact">Discuss a project <ArrowUpRight size={16}/></Link></div></div>
  </div>;
}
