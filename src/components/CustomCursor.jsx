import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) {
        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
      }
    };

    const animateTrail = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      if (trail) {
        trail.style.left = `${trailX}px`;
        trail.style.top = `${trailY}px`;
      }
      requestAnimationFrame(animateTrail);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .skill-tag, .project-card, .achievement-card, .stat-card, .timeline-card')) {
        cursor?.classList.add('cursor-hover');
        trail?.classList.add('trail-hover');
      }
    };

    const handleMouseOut = () => {
      cursor?.classList.remove('cursor-hover');
      trail?.classList.remove('trail-hover');
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    animateTrail();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
};

export default CustomCursor;
