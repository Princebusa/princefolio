export default function Copyright() {
  return (
    <footer className="rounded-2xl border border-[var(--border)] bg-[var(--white)] px-6 py-6 sm:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p
          className="text-[22px] tracking-wide text-[var(--vast)] sm:text-[24px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Let&apos;s build the <span className="italic-accent">future</span>.
        </p>
        <p
          className="text-[12px] text-[var(--fog)] sm:text-[13px]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          © 2026 · Designed & developed by{" "}
          <span className="font-medium text-[var(--vast)]">Prince</span>
        </p>
      </div>
    </footer>
  );
}
