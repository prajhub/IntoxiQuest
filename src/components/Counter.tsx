"use client";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import React, { useState, useEffect } from "react";

const Counter = React.memo(({ timer }: { timer: number }) => {
  const { toast } = useToast();

  const [seconds, setSeconds] = useState(0);
  const [stopTimer, setStopTimer] = useState(false);
  let interval: any;

  useEffect(() => {
    if (!stopTimer) {
      const start = Date.now();
      interval = setInterval(() => {
        const delta = Date.now() - start;
        setSeconds(Math.floor(delta / 1000));
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [stopTimer]);

  useEffect(() => {
    if (seconds === timer) {
      toast({
        title: "Time's up!",
        description: "You've completed the game!",
        action: (
          <ToastAction
            altText="Restart"
            onClick={() => window.location.reload()}
          >
            Restart
          </ToastAction>
        ),
      });

      setStopTimer(!stopTimer);
    }
  }, [seconds, timer, toast]);

  return <div className="text-black">{seconds}</div>;
});

export default React.memo(Counter);
