import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText = "<Priti Jadhav />";

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setText(fullText.slice(0, index));
      index += 1;

      if (index > fullText.length) {
        window.clearInterval(interval);
        window.setTimeout(onComplete, 300);
      }
    }, 60);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-bg">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-brand/5 rounded-[50%] blur-[100px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo/Name animation */}
        <div className="mb-6 px-5 py-3 rounded-[16px] border border-surface-border/40 bg-surface/60 backdrop-blur-xl">
          <p className="m-0 text-[1.3rem] text-text-main font-ibm-plex-mono font-medium">
            {text}
            <span className="animate-blink text-brand">|</span>
          </p>
        </div>
        
        {/* Progress bar */}
        <div className="w-[200px] h-[3px] bg-surface-border/30 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-brand to-accent-purple animate-loading rounded-full" />
        </div>
        
        {/* Subtitle */}
        <p className="mt-4 text-xs text-text-subtle font-ibm-plex-mono tracking-[0.15em] uppercase">
          Loading portfolio...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;