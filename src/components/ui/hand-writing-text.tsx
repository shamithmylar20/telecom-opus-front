'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface HandWrittenTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HandWrittenTitle({ title, subtitle, className }: HandWrittenTitleProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn("text-center space-y-6", className)}>
      <div className="relative inline-block">
        <h1 className="text-5xl md:text-7xl font-bold text-primary tracking-tight">
          {title}
        </h1>
        
        {/* Hand-drawn circle animation */}
        <svg
          className="absolute -inset-4 w-full h-full pointer-events-none"
          viewBox="0 0 300 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="150"
            cy="50"
            rx="140"
            ry="35"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="100"
            strokeDashoffset={isAnimating ? "0" : "100"}
            className="text-primary opacity-60 transition-all duration-2000 ease-in-out"
            style={{
              strokeDasharray: '880',
              strokeDashoffset: isAnimating ? '0' : '880',
            }}
          />
        </svg>
      </div>
      
      {subtitle && (
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}