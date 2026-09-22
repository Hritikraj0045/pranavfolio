'use client';
import { useState } from 'react';
import { CheckCircle2, Linkedin, Mail, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';
import PageIntroVisual from '@/components/PageIntroVisual';

const recipient = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'pranavsonar2002@gmail.com';
const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/in/pranav-sonar02/';
const phoneNumber = '9145365773';
const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent('Hi Pranav, I came across your portfolio and would like to discuss an enquiry.')}`;

function WhatsAppIcon({size=20}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.47 0 .12 5.35.12 11.93c0 2.1.55 4.15 1.59 5.96L.03 24l6.26-1.64a11.92 11.92 0 0 0 5.76 1.47h.01c6.58 0 11.93-5.35 11.93-11.93 0-3.19-1.24-6.19-3.47-8.42Zm-8.47 18.3h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.24C2.18 6.48 6.6 2.05 12.05 2.05c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.43 9.87-9.88 9.87Zm5.41-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" fill="currentColor"/></svg>}

export default function Contact(){
  const [sent,setSent] = useState(false);
  function submit(e){
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nCompany: ${data.get('company') || 'Not provided'}\n\nMessage:\n${data.get('message')}`);
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSent(true);
  }
  return <div className="contact-page section">
    <div className="page-intro-grid contact-intro">
  <Reveal><p className="eyebrow">05 / CONTACT</p><h1 className="display">Let's talk about the problem you're trying to solve.</h1><p className="hero-copy">Tell me what you are working on, where the challenge is, and what outcome you are looking for.</p></Reveal>
  <PageIntroVisual label="LET'S BUILD SOMETHING USEFUL" variant="editorial"/>
</div>
    <Reveal delay={.08}><div className="contact-layout"><form className="contact-form" onSubmit={submit}>
      <label>Name<input name="name" required placeholder="Your name"/></label>
      <label>Email<input name="email" type="email" required placeholder="you@company.com"/></label>
      <label>Company <span>(optional)</span><input name="company" placeholder="Company / organisation"/></label>
      <label>What can I help with?<textarea name="message" required rows="7" placeholder="Tell me about the project, problem or opportunity..."/></label>
      <div className="contact-submit-row"><button className="button button-dark" type="submit">Send enquiry <Send size={16}/></button><div className="contact-socials" aria-label="Direct contact options"><a className="contact-social" href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/><span>LinkedIn</span></a><a className="contact-social" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={18}/><span>WhatsApp</span></a></div></div>
      {sent && <p className="form-note"><CheckCircle2 size={16}/> Your email client should open with the enquiry pre-filled.</p>}
    </form><aside className="contact-aside"><div className="contact-aside-card"><Mail size={22}/><b>Email</b><span>{recipient}</span></div><div className="contact-aside-card"><WhatsAppIcon size={22}/><b>WhatsApp</b><span>+91 {phoneNumber}</span></div><div className="contact-aside-card"><b>What happens next?</b><p>I’ll have the context from your message first, so the conversation can start with the actual problem rather than a generic introduction.</p></div></aside></div></Reveal>
  </div>
}
