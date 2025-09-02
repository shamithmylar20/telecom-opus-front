'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { useTelecomAgent } from '@/hooks/use-telecom-agent';
import { TicketResults } from '@/components/ui/ticket-results';

const Chat = () => {
  const navigate = useNavigate();
  const { messages, tickets } = useTelecomAgent();
  const [hasStartedChat, setHasStartedChat] = useState(false);

  // Monitor when chat has started (user sent first message)
  React.useEffect(() => {
    if (messages.length > 0 && !hasStartedChat) {
      setHasStartedChat(true);
    }
  }, [messages.length, hasStartedChat]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-foreground hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-semibold">TelecomMaster Agent</h1>
        </div>
      </div>

      {/* Chat Interface - Centered */}
      <div className={`transition-all duration-700 ease-in-out ${
        hasStartedChat 
          ? 'flex min-h-[calc(100vh-80px)] flex-col p-4' 
          : 'flex min-h-[calc(100vh-80px)] items-center justify-center p-4'
      }`}>
        <div className={`${hasStartedChat ? 'flex-1' : ''}`}>
          <ChatInterface />
        </div>

        {/* Results Section */}
        {tickets.length > 0 && (
          <div className="w-full max-w-4xl mx-auto mt-8">
            <TicketResults />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;