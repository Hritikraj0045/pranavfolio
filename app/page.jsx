"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Rocket,
  Search,
  Users,
  Workflow,
  X,
  Zap
} from "lucide-react";
import { useRef, useState } from "react";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } }
};

const stats = [
  { value: "50+", label: "Production releases", icon: Rocket },
  { value: "350+", label: "Business partners supported", icon: Users },
  { value: "₹2,500 Cr+", label: "AUM impacted", icon: CircleDollarSign },
  { value: "₹500 Cr+", label: "Business growth supported", icon: BarChart3 },
  { value: "5,000+", label: "Listed entities supported", icon: Building2 }
];

const cases = [
  {
    number: "01",
    title: "Partner/RM Mobile Application",
    tags: "Product Ownership · Wealth Management · FinTech",
    text:
      "A mobile platform that brought client servicing, investment execution, business reporting and growth opportunities into a single experience for business partners and Relationship Managers.",
    visual: "mobile"
  },
  {
    number: "02",
    title: 'AMC "Skin in the Game"',
    tags: "Regulatory Technology · Mutual Funds · XBRL/iXBRL",
    text:
      "Translating a SEBI regulatory framework into a standardized reporting, validation and AMC/RTA reconciliation workflow.",
    visual: "regulatory"
  },
  {
    number: "03",
    title: "AI-Powered Listing Document Intelligence",
    tags: "AI · Capital Markets · Regulatory Technology",
    text:
      "An AI-assisted workflow designed to scrutinize IPO and listing documents against regulatory and exchange requirements, with checklist-level traceability.",
    visual: "ai"
  }
];

const experience = [
  {
    company: "AR Digital Wealth",
    mark: "AR",
    role: "Business Analyst — Product Tech",
    dates: "Mar 2026 — Present"
  },
  {
    company: "BSE",
    mark: "BSE",
    role: "Deputy Manager — Regulatory Projects",
    dates: "Dec 2023 — Mar 2026",
    previous: "Previously: Assistant Manager — Business Analyst"
  },
  {
    company: "OptaIoT",
    mark: "O",
    role: "Scrum Master Intern",
    dates: "2023"
  },
  {
    company: "Oasis Infobyte",
    mark: "OI",
    role: "Web Developer",
    dates: "2023"
  }
];

const skills = [
  {
    title: "Product & Business Analysis",
    items: "Requirements Engineering · Product Discovery · User Stories · BRD · FRD · PRD · Process Mapping · UAT · Stakeholder Management"
  },
  {
    title: "Product Delivery",
    items: "Product Ownership · Backlog Prioritization · Roadmaps · Feature Prioritization · Release Management · SDLC"
  },
  {
    title: "Financial Technology",
    items: "Wealth Management · Mutual Funds · Capital Markets · Payments · Regulatory Technology"
  },
  {
    title: "Technology",
    items: "API Integration · SQL · Power BI · Python · Jira · Confluence · Figma"
  }
];

const approach = [
  ["01", "Discover", "Understand users, business needs and the problem.", Search],
  ["02", "Define", "Translate needs into requirements, rules and workflows.", FileText],
  ["03", "Design", "Create user journeys, wireframes and functional experiences.", Layers3],
  ["04", "Prioritize", "Balance business value, user needs, regulatory requirements and feasibility.", Workflow],
  ["05", "Deliver", "Work with technology, QA, vendors and stakeholders through UAT and release.", Zap],
  ["06", "Improve", "Use feedback and business needs to drive enhancements.", BarChart3]
];

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>;
}

function CaseVisual({ type }) {
  if (type === "mobile") {
    return (
      <div className="case-visual mobile-visual">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="phone"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.55 }}
          >
            <div className="phone-top" />
            <div className="phone-row wide" />
            <div className="phone-row" />
            <div className="phone-row" />
            <div className="phone-pill" />
            <div className="phone-row wide" />
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "regulatory") {
    return (
      <div className="case-visual flow-visual">
        <div className="flow-node">AMC</div>
        <ChevronRight />
        <div className="flow-node">XBRL</div>
        <ChevronRight />
        <div className="flow-node">Validation</div>
        <ChevronRight />
        <div className="flow-node">Reporting</div>
      </div>
    );
  }

  return (
    <div className="case-visual ai-visual">
      <div className="doc">DRHP</div>
      <div className="ai-core">AI</div>
      <div className="findings">
        <span><CheckCircle2 /> Gaps identified</span>
        <span><CheckCircle2 /> Page reference</span>
        <span><CheckCircle2 /> Highlighted section</span>
        <span><CheckCircle2 /> Listing team review</span>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Case Studies", "#work"],
    ["Skills", "#skills"],
    ["Contact", "#contact"]
  ];

  return (
    <header className="site-header">
      <a href="#home" className="brand">Pranav Sonar</a>
      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="header-cta" href="#contact">Let&apos;s Connect</a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <main>
      <Header />

      <section id="home" ref={heroRef} className="hero">
        <motion.div className="hero-copy" style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.p variants={reveal} className="eyebrow">
              BUSINESS ANALYST <span>|</span> PRODUCT PROFESSIONAL
            </motion.p>
            <motion.h1 variants={reveal}>
              Building better products
              <br />
              across FinTech, Wealth
              <br />
              Management &amp; Capital Markets.
            </motion.h1>
            <motion.p variants={reveal} className="hero-sub">
              I bridge business problems, regulatory requirements and
              technology to turn complex ideas into scalable digital products.
            </motion.p>
            <motion.div variants={reveal} className="domain-row">
              <span>FinTech</span><i /> <span>Wealth Management</span><i />
              <span>Capital Markets</span><i /> <span>Regulatory Technology</span><i />
              <span>AI</span>
            </motion.div>
            <motion.div variants={reveal} className="hero-actions">
              <a href="#work" className="button primary">View My Work <ArrowRight size={17} /></a>
              <a href="#contact" className="button secondary">Let&apos;s Connect</a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="hero-graphic" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <div className="hero-note">From<br />problem<br />to impact</div>
          <div className="process-strip">
            {[
              ["01", "Understand", "Business Needs", Users],
              ["02", "Define", "Requirements", FileText],
              ["03", "Design", "Solution", Layers3],
              ["04", "Build with", "Technology", Zap],
              ["05", "Deliver", "Impact", BarChart3]
            ].map(([n, a, b, Icon], i) => (
              <div className="process-item" key={n}>
                <div className="process-icon"><Icon size={25} /></div>
                <strong>{a}</strong>
                <span>{b}</span>
                {i < 4 && <ArrowRight className="process-arrow" size={17} />}
              </div>
            ))}
          </div>
          <div className="hero-city">
            <span>PEOPLE</span>
            <span>PROCESSES</span>
            <span>TECHNOLOGY</span>
            <b>BETTER OUTCOMES</b>
          </div>
          <div className="building building-a" />
          <div className="building building-b" />
          <div className="building building-c" />
        </motion.div>
      </section>

      <section className="stats">
        {stats.map(({ value, label, icon: Icon }, i) => (
          <motion.div
            className="stat"
            key={label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.06 }}
          >
            <Icon size={23} />
            <strong>{value}</strong>
            <span>{label}</span>
          </motion.div>
        ))}
      </section>

      <section id="about" className="about section">
        <div>
          <SectionLabel>ABOUT ME</SectionLabel>
          <h2>I work where business, product and technology meet.</h2>
        </div>
        <div className="about-copy">
          <p>
            My experience spans Wealth Management, Mutual Funds, Capital Markets
            and Regulatory Technology, where I&apos;ve worked on digital products,
            regulatory platforms, AI-enabled solutions and complex financial workflows.
          </p>
          <p>
            From defining requirements and user journeys to working with technology
            teams, vendors and business stakeholders, I focus on turning complex
            business problems into practical, scalable solutions.
          </p>
          <a href="#experience" className="text-link">More About Me <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-heading">
          <div>
            <SectionLabel>FEATURED WORK</SectionLabel>
            <h2>Selected Case Studies</h2>
          </div>
          <a href="#work" className="text-link">View All Case Studies <ArrowRight size={16} /></a>
        </div>

        <div className="case-grid">
          {cases.map((item, i) => (
            <motion.article
              className="case-card"
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -7 }}
            >
              <div className="case-number">{item.number}</div>
              <CaseVisual type={item.visual} />
              <div className="case-content">
                <h3>{item.title}</h3>
                <p className="case-tags">{item.tags}</p>
                <p>{item.text}</p>
                <a href="#contact" className="text-link">View Case Study <ArrowRight size={15} /></a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="approach section">
        <div className="approach-intro">
          <SectionLabel>MY APPROACH</SectionLabel>
          <h2>From complex problems to usable products.</h2>
        </div>
        <div className="approach-grid">
          {approach.map(([num, title, text, Icon], i) => (
            <motion.div
              className="approach-item"
              key={num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="approach-icon"><Icon size={21} /></div>
              <strong>{num} {title}</strong>
              <p>{text}</p>
              {i < approach.length - 1 && <ArrowRight className="approach-arrow" size={20} />}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience section">
        <div className="experience-intro">
          <SectionLabel>EXPERIENCE</SectionLabel>
          <h2>A journey across financial technology &amp; digital products.</h2>
        </div>
        <div className="experience-grid">
          {experience.map((item, i) => (
            <motion.div
              className="experience-card"
              key={item.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="company-mark">{item.mark}</div>
              <div>
                <h3>{item.company}</h3>
                <p>{item.role}</p>
                <span>{item.dates}</span>
                {item.previous && <small>{item.previous}</small>}
              </div>
              <ArrowRight size={17} className="card-arrow" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="skills section">
        <div className="skills-intro">
          <SectionLabel>EXPERTISE</SectionLabel>
          <h2>Key Skills &amp; Domains</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill-block"
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <h3>{skill.title}</h3>
              <p>{skill.items}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-inner">
          <SectionLabel>LET&apos;S TALK</SectionLabel>
          <h2>Have a complex problem worth solving?</h2>
          <p>
            Whether it&apos;s a product challenge, a business process, or a technology
            initiative, I&apos;m interested in understanding the problem and finding a better way forward.
          </p>
          <div className="contact-actions">
            <a href="mailto:pranavsonar2002@gmail.com" className="button light">Let&apos;s Connect <ArrowRight size={17} /></a>
            <a href="https://www.linkedin.com/in/pranav-sonar02/" className="social-link"><Linkedin size={18} /> LinkedIn</a>
            <a href="mailto:pranavsonar2002@gmail.com" className="social-link"><Mail size={18} /> Email</a>
          </div>
        </div>
        <div className="contact-mountains" aria-hidden="true">
          <div className="mountain m1" />
          <div className="mountain m2" />
          <div className="mountain m3" />
        </div>
      </section>

      <footer className="footer">
        <strong>Pranav Sonar</strong>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#work">Case Studies</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <span>© 2025 Pranav Sonar. All rights reserved.</span>
      </footer>
    </main>
  );
}
