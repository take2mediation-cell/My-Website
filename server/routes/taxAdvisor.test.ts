import { describe, expect, it } from "vitest";
import { chatRequestSchema } from "../../shared/chat.ts";

describe("chatRequestSchema", () => {
  it("accepts a valid message list", () => {
    const result = chatRequestSchema.safeParse({
      messages: [{ role: "user", content: "What is the TFSA limit?" }],
    });
    expect(result.success).toBe(true);
  });

  it("rejects an empty message list", () => {
    const result = chatRequestSchema.safeParse({ messages: [] });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid role", () => {
    const result = chatRequestSchema.safeParse({
      messages: [{ role: "system", content: "hi" }],
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty message content", () => {
    const result = chatRequestSchema.safeParse({
      messages: [{ role: "user", content: "" }],
    });
    expect(result.success).toBe(false);
  });
});
