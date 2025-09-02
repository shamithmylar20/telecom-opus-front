'use client';

import React from 'react';
import { AIInput } from '@/components/ui/ai-input';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';
import { useTelecomAgent } from '@/hooks/use-telecom-agent';
import { ProcessingStatus } from './ProcessingStatus';

export function ChatInterface() {
  const { messages, isLoading, processingStatus, sendMessage } = useTelecomAgent();

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Messages */}
      <div className="mb-8 space-y-6 min-h-[300px]">
        {messages.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              TelecomMaster Agent Ready
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tell me to process customer complaints and I'll create Jira tickets, 
              generate reports, and handle the entire workflow for you.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <MessageBubble key={index} message={message} />
          ))
        )}
        
        {isLoading && <TypingIndicator />}
        {processingStatus && <ProcessingStatus status={processingStatus} />}
      </div>

      {/* Input Area */}
      <AIInput
        placeholder="Tell me to process customer complaints and create Jira tickets..."
        onSubmit={sendMessage}
        disabled={isLoading}
        className="w-full"
      />
    </div>
  );
}