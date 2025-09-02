'use client';

import React from 'react';
import { Hero } from '@/components/ui/hero';
import { FeaturesSectionWithCardGradient } from '@/components/ui/feature-section-with-card-gradient';

const Index = () => {
  return (
    <div>
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
      <FeaturesSectionWithCardGradient />
    </div>
  );
};

export default Index;
