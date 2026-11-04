import PageShell from "@/components/page-shell";
import CommunityPrivacy from "@/components/sections/community-privacy";
import Cta from "@/components/sections/cta";
import Faq, { faqs } from "@/components/sections/faq";
import Features from "@/components/sections/features";
import GuidesPreview from "@/components/sections/guides-preview";
import Hero from "@/components/sections/hero";
import HowItWorks from "@/components/sections/how-it-works";
import JsonLd from "@/components/seo/json-ld";
import { absoluteUrl, site } from "@/lib/site";

const org = {
  "@type": "Organization",
  "@id": `${absoluteUrl("/")}#organization`,
  name: site.legalName,
  url: absoluteUrl("/"),
  logo: absoluteUrl("/icon-512.png"),
  email: site.supportEmail,
};

export default function Home() {
  const storeUrls = [site.appStoreUrl, site.playStoreUrl].filter(Boolean);
  return (
    <PageShell>
      <JsonLd
        data={[
          { "@context": "https://schema.org", ...org },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${absoluteUrl("/")}#website`,
            name: site.name,
            url: absoluteUrl("/"),
            description: site.description,
            publisher: { "@id": `${absoluteUrl("/")}#organization` },
            inLanguage: "en",
          },
          {
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: site.name,
            description: site.description,
            url: absoluteUrl("/"),
            operatingSystem: "iOS, Android",
            applicationCategory: "HealthApplication",
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: "Free to start" },
            publisher: { "@id": `${absoluteUrl("/")}#organization` },
            ...(storeUrls.length ? { sameAs: storeUrls, downloadUrl: storeUrls } : {}),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <CommunityPrivacy />
      <GuidesPreview />
      <Faq />
      <Cta />
    </PageShell>
  );
}
