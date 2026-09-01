import { Router } from "express";
import { chatRequestSchema } from "../../shared/chat.ts";
import { getAnthropicClient, TAX_ADVISOR_MODEL } from "../lib/anthropic.ts";
import { CANADIAN_TAX_SYSTEM_PROMPT } from "../lib/canadianTaxKnowledge.ts";

export const taxAdvisorRouter = Router();

taxAdvisorRouter.post("/chat", async (req, res) => {
  const parsed = chatRequestSchema.safeParse(req.body);
  if (!parsed.success) {
    res
      .status(400)
      .json({ error: "Invalid request", details: parsed.error.flatten() });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(503).json({
      error:
        "The tax advisor assistant isn't configured yet. Set the ANTHROPIC_API_KEY environment variable on the server.",
    });
    return;
  }

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache, no-transform");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders?.();

  const send = (event: string, data: unknown) => {
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
  };

  try {
    const anthropic = getAnthropicClient();
    const stream = anthropic.messages.stream({
      model: TAX_ADVISOR_MODEL,
      max_tokens: 1024,
      system: CANADIAN_TAX_SYSTEM_PROMPT,
      messages: parsed.data.messages.map(m => ({
        role: m.role,
        content: m.content,
      })),
    });

    stream.on("text", text => {
      send("delta", { text });
    });

    stream.on("error", err => {
      send("error", {
        message: err instanceof Error ? err.message : "Stream error",
      });
      res.end();
    });

    await stream.finalMessage();
    send("done", {});
    res.end();
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ error: "Failed to reach the assistant" });
      return;
    }
    send("error", {
      message: err instanceof Error ? err.message : "Unknown error",
    });
    res.end();
  }

  req.on("close", () => {
    res.end();
  });
});
