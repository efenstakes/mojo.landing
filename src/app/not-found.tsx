import Link from "next/link";
import Background from "@/components/background";
import Logo from "@/components/logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Background />
      <div className="glass max-w-md rounded-blob p-10 text-center">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="mt-6 text-3xl font-extrabold">Lost your MOJO?</h1>
        <p className="mt-3 text-ink-soft">This page doesn&apos;t exist. Let&apos;s get you back on track.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-violet-deep">
          Back home
        </Link>
      </div>
    </main>
  );
}
