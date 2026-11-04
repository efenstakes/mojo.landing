import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Delete Your MOJO Account",
  description: "How to delete your MOJO account and data, in the app or by email, and what gets deleted.",
  alternates: { canonical: absoluteUrl("/delete-account") },
};

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete your MOJO account"
      updated="2026-11-04"
      intro="You can delete your MOJO data, or your whole account, at any time. Deletion is immediate and permanent."
    >
      <h2>In the app</h2>
      <ul>
        <li>Open MOJO and go to your profile.</li>
        <li>Open Settings.</li>
        <li>Choose to delete your data only, or to delete your whole profile, and confirm.</li>
      </ul>

      <h2>By email</h2>
      <p>
        Can&apos;t access the app? Email <a href={`mailto:${site.supportEmail}?subject=Delete%20my%20Mojo%20account`}>{site.supportEmail}</a>{" "}
        from the address on your account with the subject &quot;Delete my MOJO account&quot;. We&apos;ll confirm once
        it&apos;s done.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        <li>Your profile and preferences.</li>
        <li>Your wellness data: journal entries, voice check-ins, moods, sleep and activities.</li>
        <li>Your posts, group memberships and milestones.</li>
      </ul>
      <p>
        Data is removed from our databases straight away. Copies on your other devices are cleared the next time each
        device opens the app. See our <a href={absoluteUrl("/privacy")}>privacy policy</a> for more.
      </p>
    </LegalPage>
  );
}
