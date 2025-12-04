'use client';
import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('dark');
  useEffect(()=>{
    const cookie = typeof document !== 'undefined' ? document.cookie.match('(^|;)\s*theme\s*=\s*([^;]+)') : null;
    if (cookie) setTheme(cookie[2]);
  },[]);

  function toggle(){
    const t = theme === 'dark' ? 'light' : 'dark';
    document.cookie = `theme=${t}; path=/`;
    setTheme(t);
    document.documentElement.setAttribute('data-theme', t);
  }

  return <button onClick={toggle} className="px-3 py-1 rounded border">{theme === 'dark' ? 'Light' : 'Dark'}</button>;
}
