import './globals.css';
import SiteNav from '@/components/SiteNav';
export const metadata={title:'Pranav Sonar — Business Analyst · Product · RegTech',description:'Selected product, regulatory technology and AI workflow case studies by Pranav Sonar.'};
export default function RootLayout({children}){return <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:`(function(){try{var t=localStorage.getItem('pranav-theme');if(!t)t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.dataset.theme=t}catch(e){}})()`}} /></head><body><SiteNav/><main>{children}</main></body></html>}
