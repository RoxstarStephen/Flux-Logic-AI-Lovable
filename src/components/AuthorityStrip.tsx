const companies = [
  "NovaTech Systems",
  "Meridian Data Co.",
  "Axion Ventures",
  "ClearPath Analytics",
  "Stratos Engineering",
  "Helix Solutions",
];

const AuthorityStrip = () => {
  return (
    <section className="py-12 border-y border-foreground/5 overflow-hidden">
      <p className="text-center text-xs font-mono text-muted-foreground tracking-widest uppercase mb-8">
        Powering workflows for teams at
      </p>
      <div className="relative">
        <div className="flex animate-scroll-left w-max gap-16 items-center">
          {[...companies, ...companies].map((name, i) => (
            <span
              key={i}
              className="text-muted-foreground/40 text-xl font-bold tracking-tight whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthorityStrip;
