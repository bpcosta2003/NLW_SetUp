import React, {useEffect, useState} from "react";

export default function ProgressBarCountdown() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setTimeout(
      () =>
        setProgress((prevProgress) => {
          if (prevProgress === 0) return 0;

          const newProg = prevProgress - 5;

          setProgress(newProg);
          return newProg;
        }),
      100
    );
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="h-3 rounded-xl bg-zinc-700 w-full mt-4">
      <div
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-green-600 w-3/4 transition-all ease-linear"
        style={{width: `${progress}%`}}
      ></div>
    </div>
  );
}
