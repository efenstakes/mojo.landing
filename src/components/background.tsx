/**
 * Soft drifting colour blobs behind the whole page -- Mojo's take on
 * Heylixir's animated 3D background, done in CSS so it costs nothing to load.
 */
export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] animate-drift rounded-full bg-violet/30 blur-3xl" />
      <div className="absolute -right-[15%] top-[20%] h-[50vmax] w-[50vmax] animate-drift-slow rounded-full bg-teal/25 blur-3xl" />
      <div className="absolute bottom-[-25%] left-[25%] h-[45vmax] w-[45vmax] animate-drift rounded-full bg-amber/15 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(29_24_56/0.06)_1px,transparent_0)] [background-size:28px_28px]" />
    </div>
  );
}
