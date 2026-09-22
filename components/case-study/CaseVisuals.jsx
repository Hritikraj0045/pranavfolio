"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2, ArrowRight, Check, Smartphone, Database, Users, FileText } from "lucide-react";

export function BeforeAfter() {
  const [active, setActive] = useState("after");
  return (
    <div className="before-after">
      <div className="ba-tabs" role="tablist">
        {[["before", "BEFORE"], ["after", "DESIRED STATE"]].map(([id, label]) => (
          <button key={id} className={active === id ? "active" : ""} onClick={() => setActive(id)}>{label}</button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {active === "before" ? (
          <motion.div key="before" className="ba-canvas before-canvas" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
            <div className="ba-person">PARTNER</div>
            <div className="ba-arrow">↓</div>
            <div className="ba-node">WEB PORTAL<br/><small>not optimized for mobile</small></div>
            <div className="ba-arrow">↓</div>
            <div className="ba-split"><span>OPERATIONS</span><span>BDM</span><span>ACCOUNT MANAGER</span></div>
            <div className="ba-footnote">Email · WhatsApp · Manual requests</div>
          </motion.div>
        ) : (
          <motion.div key="after" className="ba-canvas after-canvas" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
            <div className="ba-person">PARTNER / RM</div>
            <div className="ba-arrow">↓</div>
            <div className="ba-mobile-shell"><div className="mini-top">PARTNER APP <span>●</span></div><div className="mini-kpis"><b>AUM</b><b>SALES</b><b>ORDERS</b></div><div className="mini-actions"><i>Portfolio</i><i>SIP</i><i>Reports</i><i>Demat</i></div></div>
            <div className="ba-arrow">↓</div>
            <div className="ba-split"><span>SELF-SERVICE</span><span>INVEST</span><span>INSIGHTS</span></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ProductPillars({ capabilities }) {
  const [active, setActive] = useState(0);
  return <div className="pillar-system">
    <div className="pillar-tabs">{capabilities.map(([title], i) => <button key={title} className={active === i ? "active" : ""} onClick={() => setActive(i)}>{String(i + 1).padStart(2,"0")} / {title}</button>)}</div>
    <motion.div className="pillar-detail" layout>
      <div className="pillar-orbit"><div className="orbit-core">APP</div><div className="orbit-ring"/><div className="orbit-dot d1"/><div className="orbit-dot d2"/><div className="orbit-dot d3"/></div>
      <div><p className="eyebrow">CAPABILITY {String(active + 1).padStart(2,"0")}</p><h3>{capabilities[active][0]}</h3><p>{capabilities[active][1]}</p></div>
    </motion.div>
  </div>;
}

export function MobileShowcase() {
  const [screen, setScreen] = useState(0);
  const screens = [
    {label:"Dashboard", title:"Business overview", body:"AUM, sales, pending orders and opportunity signals.", cards:["₹XX.X Cr AUM","₹XX L Sales","12 Pending"]},
    {label:"Portfolio", title:"Client portfolio", body:"A compact view for client conversations and servicing.", cards:["Holdings","Transactions","Cash Flow"]},
    {label:"Invest", title:"Investment execution", body:"Move from conversation to action without switching workflows.", cards:["Lumpsum","SIP","Withdrawal"]},
  ];
  const s = screens[screen];
  return <div className="device-stage">
    <div className="device-copy"><p className="eyebrow">ANONYMIZED UI EXPLORER</p><h3>{s.title}</h3><p>{s.body}</p><div className="device-tabs">{screens.map((x,i)=><button key={x.label} className={i===screen?"active":""} onClick={()=>setScreen(i)}>{x.label}</button>)}</div></div>
    <motion.div className="phone-large" key={screen} initial={{opacity:0,y:20,rotate:2}} animate={{opacity:1,y:0,rotate:0}} transition={{duration:.45}}>
      <div className="phone-speaker"/><div className="phone-screen"><div className="appbar"><span>09:41</span><b>PRANAV</b><span>•••</span></div><div className="welcome">Good morning,<br/><strong>Partner</strong></div><div className="balance"><small>{s.cards[0]}</small><b>{s.cards[1]}</b><span>{s.cards[2]}</span></div><div className="screen-grid">{s.cards.map((c,i)=><div key={c}><span>{String(i+1).padStart(2,"0")}</span><b>{c}</b><em>↗</em></div>)}</div><div className="screen-line"/><div className="screen-chart"><i/><i/><i/><i/><i/><i/><i/></div></div>
    </motion.div>
  </div>;
}

export function WireframeLightbox() {
  const [open, setOpen] = useState(false);
  return <>
    <button className="wireframe-card" onClick={() => setOpen(true)} aria-label="Open anonymized dashboard wireframe">
      <div className="wire-head"><span>FIG 01</span><Maximize2 size={15}/></div>
      <div className="wire-ui"><div className="wire-nav"/><div className="wire-main"><div className="wire-title"/><div className="wire-kpis"><i/><i/><i/></div><div className="wire-table"><i/><i/><i/><i/><i/></div></div></div>
      <span className="wire-caption">Click to inspect anonymized wireframe</span>
    </button>
    <AnimatePresence>{open && <motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}><motion.div className="lightbox-panel" initial={{scale:.94,y:20}} animate={{scale:1,y:0}} onClick={e=>e.stopPropagation()}><button className="lightbox-close" onClick={()=>setOpen(false)}><X/></button><p className="eyebrow">ANONYMIZED PRODUCT WIREFRAME</p><h3>Partner business dashboard</h3><div className="wire-expanded"><div className="wire-expanded-nav"/><div><div className="wire-expanded-title"/><div className="wire-expanded-cards"><i/><i/><i/><i/></div><div className="wire-expanded-chart"/><div className="wire-expanded-table"><i/><i/><i/><i/><i/><i/></div></div></div></motion.div></motion.div>}</AnimatePresence>
  </>;
}

export function IntegrationNodes({ nodes }) {
  const [active, setActive] = useState(null);
  const descriptions = {"Star MF":"Investment and mutual-fund capability integration.","Demat":"Demat account-opening and servicing flow.","CRM":"Customer/business relationship context."};
  return <div className="integration-map">
    <div className="map-app"><Smartphone size={18}/><span>Partner / RM<br/>Mobile App</span></div>
    <div className="map-lines"><i/><i/><i/></div>
    <div className="map-nodes">{nodes.map((node,i)=><button key={node} className={active===node?"active":""} onClick={()=>setActive(active===node?null:node)}><span>{i===0?<Database/>:i===1?<FileText/>:<Users/>}</span>{node}<em>↗</em></button>)}</div>
    <AnimatePresence>{active && <motion.div className="node-popover" initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}}><b>{active}</b><p>{descriptions[active]}</p><small>Functional integration definition · response validation · technical collaboration</small></motion.div>}</AnimatePresence>
  </div>;
}

export function ReleaseTimeline({ items }) {
  const [active, setActive] = useState(0);
  return <div className="release-timeline"><div className="release-progress"><motion.div animate={{width:`${((active+1)/items.length)*100}%`}}/></div><div className="release-track">{items.map((item,i)=><button key={item} className={i===active?"active":""} onClick={()=>setActive(i)}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b></button>)}</div><div className="release-detail"><Check size={16}/><span><b>Release stage {active+1}</b> — {items[active]}</span></div></div>;
}

export function FeedbackLoop({ items }) {
  return <div className="feedback-loop">{items.map((item,i)=><motion.div key={item} className="feedback-step" initial={{opacity:0,scale:.94}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.08}}><span>{String(i+1).padStart(2,"0")}</span><b>{item}</b>{i<items.length-1 && <ArrowRight className="feedback-arrow" size={16}/>}</motion.div>)}</div>;
}
