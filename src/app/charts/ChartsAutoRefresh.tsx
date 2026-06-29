"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const CHARTS_REFRESH_INTERVAL_MS = 2000;

export function ChartsAutoRefresh() {
  const router = useRouter();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      router.refresh();
    }, CHARTS_REFRESH_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [router]);

  return null;
}
