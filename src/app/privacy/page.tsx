import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MOJO collects, uses and protects your journal, mood, sleep and activity data, and how to export or delete it.",
  alternates: { canonical: absoluteUrl("/privacy") },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy policy"
      updated="2026-11-04"
      intro="Your journal is personal. This page explains, in plain language, what MOJO collects, why, who helps us run the service, and the control you have over your data."
    >
      <h2>Who we are</h2>
      <p>
        MOJO is a wellness app made by {site.legalName}. You can reach us at{" "}
        <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a> about anything on this page.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>Account details: your name, email address and sign-in method (email, Google or Apple).</li>
        <li>
          What you log: journal entries, voice check-ins and their transcripts, moods, sleep, activities, goals and
          milestones.
        </li>
        <li>Community content you choose to post, such as posts, comments and group membership.</li>
        <li>Settings and preferences, such as reminder times and your MOJO Pass lock.</li>
        <li>Technical data needed to run the app: device type, app version, notification tokens and error logs.</li>
        <li>If you join the launch list on this website: your email address.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To run MOJO: save your entries, sync them across your devices and send the reminders you ask for.</li>
        <li>
          To power Halo insights: turning voice check-ins into journal entries and logs, and estimating your energy
          score and the patterns behind it.
        </li>
        <li>To keep the service secure and fix problems.</li>
        <li>To email you about your account and, if you joined the launch list, to tell you when MOJO launches.</li>
      </ul>
      <p>We don&apos;t sell your personal data, and we don&apos;t use your journal for advertising.</p>

      <h2>Who helps us run MOJO</h2>
      <p>
        We use trusted providers to host and operate the service, including Amazon Web Services (cloud hosting, file
        storage and the AI models behind Halo) and Google Firebase (sign-in and push notifications). They process
        data on our behalf and only to provide their service to us. If you subscribe, payments are handled by the
        app store or payment provider you use; we never see your full card details.
      </p>

      <h2>What you share is up to you</h2>
      <p>
        Your journal and logs are private. Nothing appears in the community unless you post it, and you can lock the
        app with MOJO Pass.
      </p>

      <h2>Your choices and rights</h2>
      <ul>
        <li>Access and export: email us and we&apos;ll send you a copy of your data.</li>
        <li>Correct: edit your profile and entries at any time.</li>
        <li>
          Delete: delete your data or your whole account in the app&apos;s settings. See{" "}
          <a href={absoluteUrl("/delete-account")}>how to delete your account</a>.
        </li>
        <li>Notifications and emails: turn reminders off in the app and unsubscribe from any email with one click.</li>
      </ul>
      <p>
        Depending on where you live (for example under GDPR in the UK and EU, or US state privacy laws), you may have
        additional rights. Email us and we&apos;ll help.
      </p>

      <h2>How long we keep data</h2>
      <p>
        We keep your data while your account is active. When you delete your account, we delete it from our
        databases. Copies stored on your own devices are cleared the next time each device opens the app.
      </p>

      <h2>Children</h2>
      <p>MOJO isn&apos;t intended for children under 13, and we don&apos;t knowingly collect their data.</p>

      <h2>Not medical advice</h2>
      <p>
        MOJO supports everyday wellbeing. It isn&apos;t a medical device and doesn&apos;t diagnose or treat any
        condition.
      </p>

      <h2>Changes</h2>
      <p>If we change this policy in a meaningful way, we&apos;ll update this page and tell you in the app.</p>
    </LegalPage>
  );
}
