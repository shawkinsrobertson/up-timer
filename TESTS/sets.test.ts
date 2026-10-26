// values/sets.test.ts
import { describe, it, expect } from "vitest";
import { createSets } from "../VALUES/sets";

describe("sets", () => {
  it("accepts a whole number of 1 or more", () => {
    expect(createSets(3)).toEqual({ ok: true, value: 3 });
  });
});