import { useEffect, useState } from "react";
import { AlarmClock, RefreshCcw, PauseCircle, PlayCircle } from "lucide-react";

const Timer = () => {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showTimer && !isPaused) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [showTimer, isPaused]);

  return (
    <div>
      {showTimer ? (
        <div className="flex items-center cursor-pointer p-2 bg-gray-200 rounded-lg">
          <div className="pr-2">{formatTime(time)}</div>
          {isPaused ? (
            <PlayCircle onClick={() => setIsPaused(false)} className="mx-2" />
          ) : (
            <PauseCircle onClick={() => setIsPaused(true)} className="mx-2" />
          )}
          <RefreshCcw
            onClick={() => {
              setShowTimer(false);
              setTime(0);
              setIsPaused(false);
            }}
          />
        </div>
      ) : (
        <div className="cursor-pointer">
          <AlarmClock onClick={() => setShowTimer(true)} />
        </div>
      )}
    </div>
  );
};

export default Timer;
