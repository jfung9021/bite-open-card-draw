import { describe, expect, it } from "vitest";
import { RoundStateStore } from "./round-state";

describe("round state store", () => {
  it("tracks current round and rehearsal mode", () => {
    const store = new RoundStateStore();

    expect(store.getSnapshot()).toEqual({ currentRound: 1, rehearsalMode: false });

    store.setRehearsalMode(true);
    store.setCurrentRound(3);

    expect(store.getSnapshot()).toEqual({ currentRound: 3, rehearsalMode: true });
  });

  it("advances rounds without passing Round 4", () => {
    const store = new RoundStateStore();

    store.advanceRound();
    expect(store.getSnapshot().currentRound).toBe(2);

    store.setCurrentRound(4);
    expect(() => store.advanceRound()).toThrow("Round 4 is the final round.");
  });
});
