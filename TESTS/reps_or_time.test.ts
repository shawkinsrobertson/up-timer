import { describe, it, expect } from "vitest";
import { createRepsOrTime } from "../VALUES/reps_or_time";

describe("createRepsOrTime", () => {
  it("accepts a plain number as reps", () => {
    expect(createRepsOrTime("12")).toEqual({ ok: true, value: 12, type: "reps" });
  });

  it("accepts time values with an s suffix", () => {
    expect(createRepsOrTime("20s")).toEqual({ ok: true, value: 20, type: "time" });
  });

  it("accepts mm:ss format and converts it to total seconds", () => {
    expect(createRepsOrTime("2:15")).toEqual({ ok: true, value: 135, type: "time" });
  });

  it("rejects entries without any digits", () => {
    const result = createRepsOrTime("no reps");
    expect(result.ok).toBe(false);
    expect(result.error).toContain("number");
  });

  it("rejects values with invalid seconds in mm:ss format", () => {
    const result = createRepsOrTime("0:99");
    expect(result.ok).toBe(false);
    expect(result.error).toContain("seconds");
  });
});
