"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const STAGE_REFRESH_INTERVAL_MS = 2000;

export function StageAutoRefresh() {
  const router = useRouter();

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      router.refresh();
    }, STAGE_REFRESH_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [router]);

  return null;
}
