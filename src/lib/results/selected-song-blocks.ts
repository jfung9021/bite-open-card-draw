import type { DrawStateStore } from "@/lib/draw/draw-state";
import type { ResultStore } from "@/lib/results/result-store";
import type { RoundResultSnapshot } from "./result-engine";

export function selectedSongKeysFromResults(results: readonly RoundResultSnapshot[]) {
  return [
    ...new Set(results.flatMap((result) => result.sets.map((set) => set.selectedChart.songKey))),
  ].sort();
}

export function syncSelectedSongBlocksFromResultStore(
  drawStateStore: DrawStateStore,
  resultStore: ResultStore,
) {
  drawStateStore.replaceSelectedSongKeys(
    selectedSongKeysFromResults(resultStore.exportSnapshot().results),
  );
}
