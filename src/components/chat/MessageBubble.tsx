'use client';

import React from 'react';
import { AgentMessage } from '@/types/agent';
import { cn } from '@/lib/utils';
import { User, Bot, CheckCircle, AlertCircle, Clock } from 'lucide-react';

interface MessageBubbleProps {
  message: AgentMessage;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.type === 'user';

  const getStatusIcon = () => {
    switch (message.status) {
      case 'sent':
        return <CheckCircle className="h-3 w-3 text-success" />;
      case 'error':
        return <AlertCircle className="h-3 w-3 text-destructive" />;
      case 'sending':
        return <Clock className="h-3 w-3 text-warning animate-pulse" />;
      default:
        return null;
    }
  };

  return (
    <div className={cn("flex gap-3", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
          <Bot className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
      
      <div className={cn("flex flex-col gap-1", isUser ? "items-end" : "items-start")}>
        <div
          className={cn(
            "max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed",
            isUser 
              ? "telecom-message-user" 
              : "telecom-message-agent"
          )}
        >
          {message.content}
        </div>
        
        <div className="flex items-center gap-2 px-2">
          <span className="text-xs text-muted-foreground">
            {message.timestamp.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </span>
          {getStatusIcon()}
        </div>
      </div>
      
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-gray-600" />
        </div>
      )}
    </div>
  );
}