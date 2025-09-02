'use client';

import React from 'react';
import { Hero } from '@/components/ui/hero';

const Index = () => {
  return (
    <Hero
      title="TelecomMaster"
      subtitle="AI-Powered Complaint Resolution Agent"
      actions={[
        {
          label: "Start Processing Complaints",
          href: "/chat",
          variant: "outline"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
};

export default Index;
