export default function ContactPage() {
  return (
    <section className="space-y-4 max-w-lg">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-sub">
        Email:{" "}
        <a
          className="underline"
          href={
            "mailto:omar@example.com?subject=" +
            encodeURIComponent("Portfolio inquiry")
          }
        >
          omar@example.com
        </a>
      </p>
    </section>
  );
}
