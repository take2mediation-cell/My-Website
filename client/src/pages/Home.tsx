import { Link } from "wouter";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="font-serif text-4xl font-bold text-primary">
        Ubuntu Legacy Community Care
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
        Supporting our community through connection, education, and care —
        &ldquo;I am because we are.&rdquo;
      </p>
      <div className="mt-10 rounded-lg border border-border bg-card p-8">
        <h2 className="text-xl font-semibold">
          New: Free Financial Advisor Assistant
        </h2>
        <p className="mt-2 text-muted-foreground">
          Have questions about Canadian income tax, RRSPs, TFSAs, or benefits
          for seniors? Chat with our free assistant for plain-language guidance.
        </p>
        <Link
          href="/financial-advisor"
          className="mt-5 inline-block rounded-md bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Ask the Financial Advisor
        </Link>
      </div>
    </main>
  );
}
