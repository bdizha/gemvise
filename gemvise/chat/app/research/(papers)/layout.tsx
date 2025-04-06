export default function ResearchPaperLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 sm:py-32 pt-32">
      <div className="mx-auto w-full px-6 lg:max-w-3xl space-y-16 sm:space-y-32">
        {children}
      </div>
    </section>
  );
}
