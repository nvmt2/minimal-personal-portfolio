import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { Timeline } from '../components/sections/Timeline';
import { Contact } from '../components/sections/Contact';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="w-full">
      <Hero />
      <Projects />
      <Timeline />
      <Contact />
    </div>
  );
};
