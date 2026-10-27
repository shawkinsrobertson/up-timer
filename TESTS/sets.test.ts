import { describe, it, expect } from "vitest";
import { createSets } from "../VALUES/sets";

describe("createSets", () => {
  it("accepts a positive whole number", () => {
    expect(createSets(3)).toEqual({ ok: true, value: 3 });
  });

  it("accepts the minimum valid value", () => {
    expect(createSets(1)).toEqual({ ok: true, value: 1 });
  });

  it("rejects zero with a message that names the field", () => {
    const result = createSets(0);
    expect(result.ok).toBe(false);
    expect(result.error).toContain("sets");
  });

  it("rejects negative values", () => {
    const result = createSets(-2);
    expect(result.ok).toBe(false);
    expect(result.error).toContain("sets");
  });
});

