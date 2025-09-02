'use client';

import React from 'react';
import { PromptBox } from '@/components/ui/chatgpt-prompt-input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Chat = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message");
    // In a real app, you would also handle the uploaded file here.
    if (!message && !event.currentTarget.querySelector('img')) {
      return;
    }
    alert(`Message Submitted: ${message}`);
  };

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
      <div className="flex min-h-[calc(100vh-80px)] w-full flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl flex flex-col gap-10">
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
          
          <form onSubmit={handleSubmit} className="w-full">
            <PromptBox name="message" />
          </form>
          
          <div className="text-center">
            <p className="text-sm text-white/60">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;