'use client';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('pranav-theme');
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next = saved ? saved === 'dark' : prefers;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    setDark(next);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.dataset.theme = next ? 'dark' : 'light';
    localStorage.setItem('pranav-theme', next ? 'dark' : 'light');
    setDark(next);
  };

  return (
    <button className="theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <span className="theme-toggle-track"><span className="theme-toggle-thumb">{dark ? <Moon size={13}/> : <Sun size={13}/>}</span></span>
    </button>
  );
}
