'use client';

import React, { useState } from 'react';
import { PromptBox } from '@/components/ui/chatgpt-prompt-input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Bot } from 'lucide-react';
import BoxLoader from '@/components/ui/box-loader';
import { TicketResults } from '@/components/ui/ticket-results';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'agent';
  timestamp: Date;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [chatMovedUp, setChatMovedUp] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message") as string;
    
    if (!message?.trim()) {
      return;
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      type: 'user',
      timestamp: new Date()
    };

    setMessages([userMessage]);
    setChatMovedUp(true);
    setIsProcessing(true);

    // Reset form
    event.currentTarget.reset();

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 3500);
  };

  const loadingMessages = [
    "Analyzing...",
    "Processing...",
    "Creating...",
    "Thinking...",
    "Generating..."
  ];

  const [currentLoadingMessage] = useState(
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)]
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-xl font-semibold">TelecomMaster Agent</h1>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex min-h-[calc(100vh-80px)] w-full flex-col p-4">
        <div className={`w-full max-w-4xl mx-auto transition-all duration-700 ease-in-out ${
          chatMovedUp ? 'transform -translate-y-20' : 'flex items-center justify-center min-h-full'
        }`}>
          
          {/* Initial State - Centered */}
          {!chatMovedUp && (
            <div className="flex flex-col gap-10 items-center">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🤖</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  How Can I Help You Today?
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Tell me to process customer complaints and I'll create Jira tickets, 
                  generate reports, and handle the entire workflow for you.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="w-full max-w-2xl">
                <PromptBox name="message" />
              </form>
              
              <div className="text-center">
                <p className="text-sm text-white/60">
                  Press Enter to send, Shift + Enter for new line
                </p>
              </div>
            </div>
          )}

          {/* After Submission - Chat Messages */}
          {chatMovedUp && (
            <div className="space-y-6">
              {/* Messages */}
              {messages.map((message) => (
                <div key={message.id} className="flex gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <div className="max-w-md px-4 py-3 rounded-2xl text-sm leading-relaxed bg-white/10 text-white">
                      {message.content}
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <span className="text-xs text-white/60">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                </div>
              ))}

              {/* Processing State */}
              {isProcessing && (
                <div className="flex gap-3 justify-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex flex-col items-center gap-4 bg-white/5 p-6 rounded-2xl">
                    <BoxLoader />
                    <div className="text-center">
                      <p className="text-white font-medium">TelecomMaster is processing complaints...</p>
                      <p className="text-white/60 text-sm mt-1">{currentLoadingMessage}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* New Input Area */}
              <form onSubmit={handleSubmit} className="w-full">
                <PromptBox name="message" />
              </form>
            </div>
          )}
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="w-full max-w-4xl mx-auto mt-8">
            <TicketResults />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;