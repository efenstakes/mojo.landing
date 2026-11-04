import Background from "@/components/background";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import CommunityPrivacy from "@/components/sections/community-privacy";
import Cta from "@/components/sections/cta";
import Faq from "@/components/sections/faq";
import Features from "@/components/sections/features";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <CommunityPrivacy />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
