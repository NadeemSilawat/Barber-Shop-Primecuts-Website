import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ScrollReveal effect
const ScrollReveal = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const revealSection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });
    
    sections.forEach(section => {
      sectionObserver.observe(section);
    });
    
    return () => {
      sections.forEach(section => {
        sectionObserver.unobserve(section);
      });
    };
  }, []);
  
  return <App />;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScrollReveal />
  </StrictMode>
);