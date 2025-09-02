'use client';

import React from 'react';
import { Bot } from 'lucide-react';

export function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
        <Bot className="h-4 w-4 text-primary-foreground" />
      </div>
      
      <div className="telecom-message-agent">
        <div className="flex items-center gap-1">
          <span className="text-sm text-muted-foreground">TelecomMaster is typing</span>
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-typing"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-typing" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}