import { useEffect, useRef } from 'react';

export function useAutoResizeTextarea() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const resizeTextarea = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener('input', resizeTextarea);
    
    // Initial resize
    resizeTextarea();

    return () => {
      textarea.removeEventListener('input', resizeTextarea);
    };
  }, []);

  return textareaRef;
}