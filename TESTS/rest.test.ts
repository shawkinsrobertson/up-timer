import { describe, it, expect } from "vitest";
import { createRest } from "../VALUES/rest";

describe("createRest", () => {
  it("accepts a plain number as seconds", () => {
    expect(createRest("30")).toEqual({ ok: true, value: 30, type: "time" });
  });

  it("accepts seconds with an s suffix", () => {
    expect(createRest("15s")).toEqual({ ok: true, value: 15, type: "time" });
  });

  it("accepts mm:ss format and converts it to total seconds", () => {
    expect(createRest("1:30")).toEqual({ ok: true, value: 90, type: "time" });
  });

  it("rejects entries without any digits", () => {
    const result = createRest("rest");
    expect(result.ok).toBe(false);
    expect(result.error).toContain("number");
  });

  it("rejects values with invalid seconds in mm:ss format", () => {
    const result = createRest("1:60");
    expect(result.ok).toBe(false);
    expect(result.error).toContain("seconds");
  });
});
