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
        window.setTimeout(onComplete, 500);
      }
    }, 80);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-[#030712]">
      <p className="m-0 text-[1.5rem] text-[#f8fafc] font-ibm-plex-mono">
        {text}
        <span className="animate-blink">|</span>
      </p>
      <div className="mt-3 w-[220px] h-[2px] bg-[rgba(148,163,184,0.35)] rounded-full overflow-hidden">
        <div className="w-[45%] h-full bg-gradient-to-r from-brand to-ok animate-loading" />
      </div>
    </div>
  );
};

export default LoadingScreen;