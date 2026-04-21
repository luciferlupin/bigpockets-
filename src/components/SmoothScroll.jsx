import { useEffect } from "react";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Enable smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optimize scrolling performance
    let ticking = false;
    let lastScrollY = 0;

    const updateScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Parallax effect for hero elements
          const parallaxElements = document.querySelectorAll('[data-parallax]');
          parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrollY * speed);
            element.style.transform = `translateY(${yPos}px)`;
          });

          ticking = false;
        });
      }
    };

    const onScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        ticking = true;
        updateScroll();
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return <>{children}</>;
}
