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
    <div className="loader-wrap">
      <p className="loader-text">
        {text}
        <span className="cursor">|</span>
      </p>
      <div className="loader-track">
        <div className="loader-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
