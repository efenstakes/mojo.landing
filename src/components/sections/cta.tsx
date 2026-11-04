import StoreButtons from "@/components/store-buttons";

export default function Cta() {
  return (
    <section className="px-4 py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-blob bg-gradient-brand px-6 py-16 text-center text-white sm:px-16 sm:py-20">
        <div aria-hidden className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/15 blur-2xl" />
        <div aria-hidden className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-amber/30 blur-3xl" />
        <h2 className="relative mx-auto max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          Thirty seconds a day. A clearer picture of you.
        </h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-white/90">
          Start with today. Tell Mojo how it went, and let your patterns do the rest.
        </p>
        <StoreButtons tone="light" className="relative mt-8 justify-center" />
      </div>
    </section>
  );
}
