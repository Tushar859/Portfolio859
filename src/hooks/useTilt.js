import { useCallback } from 'react';

const useTilt = (maxTilt = 10) => {
  const handleMouseMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.transition = 'transform 0.1s ease';

    // Move inner glow
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    card.style.setProperty('--card-glow-x', `${glowX}%`);
    card.style.setProperty('--card-glow-y', `${glowY}%`);
  }, [maxTilt]);

  const handleMouseLeave = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.transition = 'transform 0.5s ease';
  }, []);

  return { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave };
};

export default useTilt;
