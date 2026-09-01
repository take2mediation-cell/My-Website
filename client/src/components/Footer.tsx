export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 text-sm text-muted-foreground">
      <div className="mx-auto max-w-5xl px-4">
        <p>
          &copy; {new Date().getFullYear()} Ubuntu Legacy Community Care.
          &ldquo;I am because we are.&rdquo;
        </p>
        <p className="mt-1">Email: ubuntu.legacy4u@gmail.com</p>
      </div>
    </footer>
  );
}
