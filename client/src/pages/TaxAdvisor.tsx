import { useRef, useState } from "react";
import { Streamdown } from "streamdown";
import type { ChatMessage } from "@shared/chat";

const WELCOME: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I'm Maple, a free assistant here to help you understand Canadian income tax, RRSPs, TFSAs, CPP/OAS, and common credits and benefits in plain language. What would you like to know? (I share general, educational information — not personalized professional advice.)",
};

export default function TaxAdvisor() {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  async function sendMessage() {
    const text = input.trim();
    if (!text || isStreaming) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setInput("");
    setError(null);
    setIsStreaming(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/tax-advisor/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
        signal: controller.signal,
      });

      if (!res.ok || !res.body) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error || `Request failed (${res.status})`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const events = buffer.split("\n\n");
        buffer = events.pop() ?? "";

        for (const rawEvent of events) {
          const lines = rawEvent.split("\n");
          const eventLine = lines.find(l => l.startsWith("event: "));
          const dataLine = lines.find(l => l.startsWith("data: "));
          if (!eventLine || !dataLine) continue;

          const eventName = eventLine.slice("event: ".length);
          const data = JSON.parse(dataLine.slice("data: ".length));

          if (eventName === "delta" && typeof data.text === "string") {
            setMessages(prev => {
              const updated = [...prev];
              const last = updated[updated.length - 1];
              updated[updated.length - 1] = {
                ...last,
                content: last.content + data.text,
              };
              return updated;
            });
          } else if (eventName === "error") {
            throw new Error(data.message || "The assistant hit an error");
          }
        }
      }
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        setError(err instanceof Error ? err.message : "Something went wrong");
      }
      setMessages(prev => {
        const last = prev[prev.length - 1];
        return last?.role === "assistant" && last.content === ""
          ? prev.slice(0, -1)
          : prev;
      });
    } finally {
      setIsStreaming(false);
      abortRef.current = null;
    }
  }

  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-10">
      <div>
        <h1 className="font-serif text-3xl font-bold text-primary">
          Financial Advisor Assistant
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Educational information about Canadian income tax and personal
          finance. Not personalized professional advice — figures are
          approximate and change yearly.
        </p>
      </div>

      <div className="flex min-h-[420px] flex-col gap-4 rounded-lg border border-border bg-card p-4">
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto">
          {messages.map((message, i) => (
            <div
              key={i}
              className={
                message.role === "user"
                  ? "ml-auto max-w-[85%] rounded-lg bg-primary px-4 py-2 text-primary-foreground"
                  : "mr-auto max-w-[85%] rounded-lg bg-muted px-4 py-2"
              }
            >
              {message.role === "assistant" ? (
                message.content ? (
                  <div className="prose prose-sm max-w-none">
                    <Streamdown>{message.content}</Streamdown>
                  </div>
                ) : (
                  <span className="text-muted-foreground">Thinking…</span>
                )
              ) : (
                <p>{message.content}</p>
              )}
            </div>
          ))}
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <form
          className="flex gap-2"
          onSubmit={e => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <input
            className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="Ask about RRSPs, tax brackets, credits for seniors…"
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={isStreaming}
          />
          <button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:opacity-50"
            disabled={isStreaming || !input.trim()}
          >
            {isStreaming ? "Sending…" : "Send"}
          </button>
        </form>
      </div>
    </main>
  );
}
