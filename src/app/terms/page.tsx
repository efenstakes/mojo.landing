import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms for using Mojo, the voice journal and mood tracker: your account, your content, community rules and subscriptions.",
  alternates: { canonical: absoluteUrl("/terms") },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of use"
      updated="2026-11-04"
      intro={`These terms cover your use of Mojo, made by ${site.legalName}. By using Mojo you agree to them. We've kept them short and plain.`}
    >
      <h2>Mojo is for wellbeing, not medical care</h2>
      <p>
        Mojo helps you journal and notice patterns in your mood, sleep and activity. It isn&apos;t a medical device,
        doesn&apos;t diagnose or treat any condition, and isn&apos;t a substitute for professional help. If you&apos;re
        in crisis, contact your local emergency number or a crisis line such as 988 (US) or Samaritans on 116 123 (UK).
      </p>

      <h2>Your account</h2>
      <p>
        You need to be at least 13 to use Mojo. Keep your sign-in details safe; you&apos;re responsible for activity on
        your account. You can delete your account at any time.
      </p>

      <h2>Your content</h2>
      <p>
        You own what you write and record. You give us permission to store and process it only to provide Mojo to you,
        including generating Halo insights. Anything you post in the community can be seen by other members of that
        community.
      </p>

      <h2>Community rules</h2>
      <ul>
        <li>Be kind. No harassment, hate or threats.</li>
        <li>No spam, scams or advertising.</li>
        <li>Don&apos;t share other people&apos;s private information.</li>
        <li>Don&apos;t give medical advice or promote anything harmful.</li>
      </ul>
      <p>We may remove content or suspend accounts that break these rules.</p>

      <h2>Subscriptions</h2>
      <p>
        Mojo is free to start. Paid plans are billed through the app store or payment provider you choose, and you can
        cancel anytime in your store account settings. Cancelling stops future renewals.
      </p>

      <h2>The service</h2>
      <p>
        We work hard to keep Mojo running and your data safe, but we provide the service &quot;as is&quot; and
        can&apos;t promise it will always be available or error-free. To the extent the law allows, we aren&apos;t
        liable for indirect losses from using Mojo.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. If a change is significant, we&apos;ll let you know in the app before it takes
        effect. Questions? Email <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> or read our{" "}
        <a href={absoluteUrl("/privacy")}>privacy policy</a>.
      </p>
    </LegalPage>
  );
}
