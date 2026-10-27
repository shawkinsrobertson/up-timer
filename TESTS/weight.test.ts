import { describe, it, expect } from "vitest";
import { createWeight } from "../VALUES/weight";

describe("createWeight", () => {
  it("accepts zero weight", () => {
    expect(createWeight(0)).toEqual({ ok: true, value: 0 });
  });

  it("accepts positive weight values", () => {
    expect(createWeight(45.5)).toEqual({ ok: true, value: 45.5 });
  });

  it("rejects negative weight values", () => {
    const result = createWeight(-1);
    expect(result.ok).toBe(false);
    expect(result.error).toContain("weight");
  });
});
