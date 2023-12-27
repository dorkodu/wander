import { useEffect, useState } from "react";

import { useTrekieStore } from "#/stores/trekieStore";

export function useDelay(delay: number = 100) {
  const [state, setState] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setState(false), delay);
    return () => clearTimeout(timeout);
  }, []);

  return state;
}

export function useRefreshStatsDaily() {
  useEffect(() => {
    const task = () => useTrekieStore.getState().updateStats();

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setUTCHours(0, 0, 0, 0);

    let interval: NodeJS.Timeout | undefined = undefined;
    let timeout = setTimeout(() => {
      task();
      interval = setInterval(task, 24 * 60 * 60 * 1000);
    }, tomorrow.getTime() - today.getTime());

    return () => {
      clearTimeout(interval);
      clearTimeout(timeout);
    };
  }, []);
}