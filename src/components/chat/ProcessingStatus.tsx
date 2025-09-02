'use client';

import React from 'react';
import { ProcessingStatus as ProcessingStatusType } from '@/types/agent';
import { Progress } from '@/components/ui/progress';
import { Bot, Activity } from 'lucide-react';

interface ProcessingStatusProps {
  status: ProcessingStatusType;
}

export function ProcessingStatus({ status }: ProcessingStatusProps) {
  return (
    <div className="flex gap-3 justify-start">
      <div className="flex-shrink-0 w-8 h-8 bg-info rounded-full flex items-center justify-center">
        <Activity className="h-4 w-4 text-info-foreground animate-pulse" />
      </div>
      
      <div className="flex-1 max-w-md">
        <div className="telecom-card p-4">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Processing Request
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">
            {status.message}
          </p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{Math.round(status.progress)}%</span>
            </div>
            <Progress value={status.progress} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
}