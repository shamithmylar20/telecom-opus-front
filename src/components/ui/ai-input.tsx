'use client';

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Send, Loader2 } from 'lucide-react';
import { useAutoResizeTextarea } from '@/hooks/use-auto-resize-textarea';
import { cn } from '@/lib/utils';

interface AIInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function AIInput({ 
  onSubmit, 
  placeholder = "Type your message...", 
  disabled = false,
  className 
}: AIInputProps) {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textareaRef = useAutoResizeTextarea();

  const handleSubmit = async () => {
    if (!message.trim() || disabled || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await onSubmit(message.trim());
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="relative flex items-end gap-3 p-4 bg-card rounded-2xl border-2 border-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
        <Textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled || isSubmitting}
          className="min-h-[60px] max-h-[200px] resize-none border-0 bg-transparent p-0 text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground"
          rows={1}
        />
        
        <Button
          onClick={handleSubmit}
          disabled={!message.trim() || disabled || isSubmitting}
          size="sm"
          className="shrink-0 telecom-button-primary h-10 w-10 rounded-xl p-0"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>
      
      <p className="text-xs text-muted-foreground mt-2 px-1">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
}