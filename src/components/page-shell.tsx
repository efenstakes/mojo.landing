import Background from "@/components/background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import WaitlistDialog from "@/components/waitlist-dialog";

/** Shared chrome for every page: background, nav, footer. */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Background />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <WaitlistDialog />
    </>
  );
}
