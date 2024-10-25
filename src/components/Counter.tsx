"use client";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import React, { useState, useEffect } from "react";

const Counter = React.memo(
  ({
    timer,
    start,
    changeQuestion,
  }: {
    timer: number;
    start: boolean;
    changeQuestion: boolean;
  }) => {
    const { toast } = useToast();

    const [seconds, setSeconds] = useState(0);
    const [stopTimer, setStopTimer] = useState(true);

    let interval: any;
    useEffect(() => {
      setStopTimer(!start);
    }, [start, changeQuestion]);

    useEffect(() => {
      if (!stopTimer) {
        // same as stoptimer === false
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

    return (
      <section>
        {" "}
        <div className="text-black">{seconds}</div>
      </section>
    );
  }
);

export default React.memo(Counter);
