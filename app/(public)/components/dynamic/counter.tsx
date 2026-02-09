'use client';

import { useEffect, useState } from 'react';

interface CounterProps {
  children: number;
}

export default function Counter ({ children }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    
    // Calculate increment steps
    const target = children;
    const duration = 2000; // 2 seconds animation
    const steps = 60; // Number of steps
    const increment = target / steps;
    const stepDuration = duration / steps;
    
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, stepDuration);

    // Cleanup
    return () => clearInterval(timer);
  }, [children]);

  return (
    <div className="">
      <span className="">
        {count}
      </span>
    </div>
  );
};